import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {FormGroup , Switch ,FormControlLabel , ListItem , ListItemText , ListItemIcon, List } 
from '@material-ui/core';
import  HomeIcon  from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
      },
      toolbar: theme.mixins.toolbar,
      listItemIcon: {
        minWidth: '48px',
      },
      listItemDisabled: {
        opacity: 0.5,
      },
    optionText: {
      margin: theme.spacing(0, 0.5, 0, 1),
    },
  }));
  
  GoOnline.propTypes = {
    IsOnline: PropTypes.bool
  };


export default function GoOnline(props) {


  const classes = useStyles();

  const [IsOnline, setIsOnline] = useState();

  const handleChange = (event) => {
    
    setIsOnline( event.target.checked );

    // Here we would connect to the WebSocket on the server

    // But first we would check if you are done with your profile
  };

  const CustomRouterLink = (props) => (
    <div   style={{
      flexGrow: 1,
    }}>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        {...props}
      />
    </div>
  );

  return (
      <>
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={IsOnline} onChange={handleChange} name="IsOnline" />}
        label="Go Online" 
        className={classes.optionText}
      />
    </FormGroup>
   
    {IsOnline &&  (
       <List>
          <CustomRouterLink key='/consultations'
          to='/consultations'>
                <ListItem button>
                        <ListItemIcon
                          className={classes.listItemIcon}
                        >
                          <HomeIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>Consultation</ListItemText>
                </ListItem>
          </CustomRouterLink>
          <CustomRouterLink
          key='/forums'
          to='/forums' >
                <ListItem button>
                        <ListItemIcon
                          className={classes.listItemIcon}
                        >
                          <HomeIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>Forums</ListItemText>
                </ListItem>
          </CustomRouterLink>
        </List>
    )}
    </>
  );
}
