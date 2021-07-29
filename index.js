    var socket = require('socket.io'),
    express = require('express'),
    app = express().use((req, res) => res.sendFile(INDEX)).listen((process.env.PORT || 80), () => console.log(`Listening on ${ 80 }`)),

    socket = socket.listen(app);
    
  
  // Global Variables
    var numUsers;
    var users = [];
 

    socket.on('connection', function(connection) {

    var addedUser = false;


    //  Request EMR
        connection.on('Request EMR', function(channel,msg){
          socket.to(channel).emit('Request EMR', msg);
        });

        connection.on('User Busy', function(channel,msg){
          socket.to(channel).emit('User Busy', msg);
        });

        connection.on('Cancelled Request', function(channel,msg){
          socket.to(channel).emit('Cancelled Request', msg);
        });

        connection.on('Request Video', function(channel,msg){
          socket.to(channel).emit('Request Video', msg);
        });

        connection.on('Accept Video', function(channel,msg){
          socket.to(channel).emit('Accept Video', msg);
        });

        connection.on('Reject Video', function(channel,msg){
          socket.to(channel).emit('Reject Video', msg);
        });

        connection.on('Video Fail', function(channel,msg){
          socket.to(channel).emit('Video Fail', msg);
        });


        connection.on('trust', function (channel) {

          if (addedUser) {
            --numUsers;
              // Clear the User List
              users.forEach(function(v, index ){
                  if (v.username.uid == connection.username.uid
                  ){
                      users.splice(index,1);
                  }
              })
          
            // echo globally that this client has left
            connection.broadcast.emit('user left', {
              numUsers: users
            });
          }
        });


    //  Accept EMR
           connection.on('Accept EMR', function(channel,msg){
            socket.to(channel).emit('Accept EMR', msg);
          });

    //  Decline EMR
          connection.on('Decline EMR', function(channel,msg){
            socket.to(channel).emit('Decline EMR', msg);
          });

    //  Request Consultation
          connection.on('Request Consultation', function(channel,msg){
            socket.to(channel).emit('Request Consultation', {patientid: connection.id, patientname: msg});
          });
          
     //  Accept Consultation
          connection.on('Accept Consultation', function(channel,msg){
            socket.to(channel).emit('Accept Consultation', {consultantid: connection.id, consultantname: msg});
          }     // Call API to Record Start Time     // api {consultationID} 
        );
            

     //  End Consultation
     connection.on('End Consultation', function(channel,msg){
      socket.to(channel).emit('End Consultation', {consultantid: connection.id, consultantname: msg});
          // Call API to Record End Time   // api {consultationID} 
  
      });

     //  Reject Consultation
     connection.on('Reject Consultation', function(channel,msg){
      socket.to(channel).emit('Reject Consultation', {consultantid: connection.id, consultantname: msg});
       // Call API to Record Rejection // api {consultationID} 
      });

      connection.on('message', function(msg){
              socket.emit('message', msg);
      });

      connection.on('PM', function(channel,msg){
            msg.servertime = new Date(new Date().getTime()).toLocaleTimeString();
            socket.to(channel).emit('PM',{sourcechannel: connection.id, message: msg});
    /// asynchronously save to a database, nosql or redis
      });
          
      // Creat Video Offer

      connection.on('Create Offer', function(channel,msg){
        msg.servertime = new Date(new Date().getTime()).toLocaleTimeString();
        socket.to(channel).emit('Create Offer',{sourcechannel: connection.id, message: msg});
      });

      connection.on('Get Offer', function(channel,msg){
        msg.servertime = new Date(new Date().getTime()).toLocaleTimeString();
        socket.to(channel).emit('Get Offer',{sourcechannel: connection.id, message: msg});
      });

      // Accept Offer

      connection.on('Accept Video Offer', function(channel,msg){
        msg.servertime = new Date(new Date().getTime()).toLocaleTimeString();
        socket.to(channel).emit('Accept Video Offer',{sourcechannel: connection.id, message: msg});
      });


      // ICE Candidate Offer

      connection.on('ICE Candidate Offer', function(channel,msg){
        msg.servertime = new Date(new Date().getTime()).toLocaleTimeString();
        socket.to(channel).emit('ICE Candidate Offer',{sourcechannel: connection.id, message: msg});
      });


      // when the client emits 'new message', this listens and executes
      connection.on('new message', function (data) {
        // we tell the client to execute 'new message'
        connection.broadcast.emit('new message', {
          username: socket.username,
          message: data
        });
      });
    
      // when the client emits 'add user', this listens and executes
      connection.on('add user', function (user) {
      
        if (addedUser) return;

        var data = {username: user.username,
                   privatechannel: connection.id,
                   geolocation: user.geolocation}

           users.forEach(function(v, index ){
                if (v.username == connection.username
                ){
                    users.splice(index,1);
                }
            })
         
        
        users.push(data);
        // we store the username in the socket session for this client
        connection.username = user.username;
        connection.geolocation = user.geolocation;
        ++numUsers;
        addedUser = true;
        console.log( user.username + ' added');
        connection.emit('login', {
          numUsers: users
        });
        // echo globally (all clients) that a person has connected
        connection.broadcast.emit('user joined', {
          username: connection.username,
          geolocation: connection.geolocation ,
   	      privatechannel: connection.id,
          numUsers: users
        });
      });
    
      // when the client emits 'typing', we broadcast it to others
      connection.on('typing', function (channel) {
        connection.to(channel).emit('typing', {
          username: socket.username,
          privatechannel: connection.id
        });
      });
    
      // when the client emits 'stop typing', we broadcast it to others
      connection.on('stop typing', function (channel) {
        connection.to(channel).emit('stop typing', {
          username: connection.username,
          privatechannel: connection.id
        });
      });

    
      // when the user disconnects.. perform this
      connection.on('disconnect', function (reason) {
        console.log("I am the reason " + reason);

        if (addedUser) {
          --numUsers;
          // Clear the User List
          users.forEach(function(v, index ){
              if (v.username.uid == connection.username.uid
              ){
                if(reason == 'ping timeout' || reason == 'transport error' || reason == 'transport close' ){
                  console.log('User ' + connection.username);
                  connection.broadcast.emit('Specific User', connection.username)
                }
                users.splice(index,1);
              }
          })
        

        // echo globally that this client has left
        connection.broadcast.emit('user left', {
          numUsers: users
        });
      }

        
      });
    });


        



