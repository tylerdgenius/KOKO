import React from 'react';
import Header from 'src/view/layout/Header';
import Menu from 'src/view/layout/Menu';
import { makeStyles } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import Alerts from 'src/view/layout/Alerts';
import authSelectors from 'src/modules/auth/authSelectors';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'rgba(0, 0, 0, 0.65)',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    fontFamily: `'Roboto', sans-serif`,

    '& h1, h2, h3, h4, h5, h6': {
      color: 'rgba(0, 0, 0, 0.85)',
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '100vh',
    overflowX: 'hidden',
  },

  toolbar: theme.mixins.toolbar,
}));

function Layout(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  const userText = useSelector(
    authSelectors.selectCurrentUserNameOrEmailPrefix,
  );

  return (
    <div className={classes.root}>
      <Header />
      <Menu url={match.url} />
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <div>
        <h2>Welcome {userText}, </h2>
        <Alerts />
        </div>
 
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
