import { Avatar,  Card,  createStyles, Grid, makeStyles, TextField, Theme  } from '@material-ui/core';

import React from 'react';

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
  
});

function ForumPage(props) {
    const classes = useStyles();

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
                      
                                    <Grid item  spacing={2} sm={6} md={4} xs={12} lg={3}>
                                     
                                    <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
                                        
                                  
                                    </Grid>
                           
                        </Grid>
                    </Grid>
                    </Card>
                    </div> 
    
    
      </>)
}



export default ForumPage;
