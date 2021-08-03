import React, { useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'src/modules/general/generalActions';
import selectors from 'src/modules/general/generalSelectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      minHeight: '500px'
    },
    inline: {
      display: 'inline',
    },
  }),
);

function NotificationList(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

/*   const initLoading = useSelector(
    selectors.selectInitLoading,
  ); */

  const general = useSelector(selectors.selectGeneral);

 const rawdata = actions.doNews();
 console.log(rawdata);
 
  return (
      <>
      <Card>
          <CardHeader
          title="My Notifications">
      
          </CardHeader>
          <CardContent>
                
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Welcome"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — Welcome on board the Platform"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
   </List>
  
          </CardContent>
      </Card>
  </>
  );
}

export default NotificationList