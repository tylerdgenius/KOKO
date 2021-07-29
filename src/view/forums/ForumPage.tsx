import { Avatar,  Card,  createStyles, Divider, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, TextField, Theme, Typography  } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React, { useRef, useState } from 'react';
import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase';
import 'firebase/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import authSelectors from 'src/modules/auth/authSelectors';

const useStyles = makeStyles({
   root: {
        width: "100%",
        transition: "0.3s",
        margin: "0 auto",
        borderRadius: "16px",
        cursor: "pointer",
        boxShadow: "0 4px 20px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 8px 40px -12.125px rgba(0,0,0,0.3)",
            transform: "scale(1)",
        },
    },
    title: {
        fontWeight: "bold",
    },
    sub: {
        lineHeight: 1.8,
        fontSize: 12,
    },
    large: {
        width: '150px',
        height: '150px'
      },

      table: {
        minWidth: 650,
      },
      chatSection: {
        width: '100%',
        height: '80vh'
      },
      headBG: {
          backgroundColor: '#e0e0e0'
      },
      borderRight500: {
          borderRight: '1px solid #e0e0e0'
      },
      messageArea: {
        height: '70vh',
        overflowY: 'auto'
      }    
  
});

firebase.initializeApp({
    apiKey: "AIzaSyCGce_SEsJe2OqTH4FSKbSi157UUzAca5o",
    authDomain: "kokofpnew.firebaseapp.com",
    projectId: "kokofpnew",
    storageBucket: "kokofpnew.appspot.com",
    messagingSenderId: "1049294481249",
    appId: "1:1049294481249:web:10efce9205534005f4c720"
})

const firestore =firebase.firestore();

function formatSeconds(seconds) {
    var date = new Date();
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

function ForumPage(props) {
    const classes = useStyles();
    const dummy = useRef();
    const userDetails = useSelector(
        authSelectors.selectCurrentUser,
      );
      console.log(userDetails)
    const auth = userDetails;

   const messagesRef = firestore.collection('messages');
   const query = messagesRef.orderBy('createdAt').limit(25);
   const [messages] = useCollectionData(query, { idField: 'id' });
   console.log(messages);

   const [formValue, setFormValue] = useState('');
   const sendMessage = async (e) => {
    e.preventDefault();

    const { id, fullName } = auth;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      id,
      fullName
    })


    setFormValue('');

  }
  return (
    <>
        <TextField  placeholder='Forums'
                        label='Search for Forums'
                        name='searchForums'
                        id='searchForums'
                        variant="outlined"
                        fullWidth
                        type='text'
                />
         <div className="mt-2">
     <Card className={`${classes.root} fade-in-bck`}>
     <Grid item lg={12}>
                        <Grid container alignItems="center" spacing={2}>
                        <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="John Wick"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                        <ListItemText secondary="online" ></ListItemText>
                    </ListItem>
                    <ListItem button key="Alice">
                        <ListItemIcon>
                            <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Alice">Alice</ListItemText>
                    </ListItem>
                    <ListItem button key="CindyBaker">
                        <ListItemIcon>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9} lg={9}>
                <List className={classes.messageArea}>
                {messages && messages.map(msg =>
              
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText  primary={msg.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText  secondary={formatSeconds(msg.createdAt.seconds)} ></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    )}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                <form onSubmit={sendMessage}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" value={formValue} onChange={(e) => setFormValue(e.target.value)} fullWidth />
                    </Grid>
                    <Grid xs={1} >
                    <Fab color="primary" aria-label="add" type="submit" disabled={!formValue}><SendIcon /></Fab> 
                        {/* <Fab color="primary" aria-label="add"><SendIcon /></Fab> */}
                    </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
      </div>
                      
                                    {/* <Grid item  spacing={2} sm={6} md={4} xs={12} lg={3}>
                                     
                                    <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
                                        
                                  
                                    </Grid> */}
                           
                        </Grid>
                    </Grid>
                    </Card>
                    </div> 
    
    
      </>)
}



export default ForumPage;
