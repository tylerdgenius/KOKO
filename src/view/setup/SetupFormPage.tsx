import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import Spinner from '../shared/Spinner';
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import authSelectors from 'src/modules/auth/authSelectors';
import admin_menus from '../admin_menus';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
  
// });
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  jss28: {
    flexGrow: 1,
    width: '100%',
    cursor: 'pointer',
    margin: '0 auto',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
   ' &:hover':{  
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    }
 }
}));
const SetupFormPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  const selectedKeys = () => {
    const url = props.url;

    const match = admin_menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (match) {
      return [match.path];
    }

    return [];
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const CustomRouterLink = (props) => (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        {...props}
      />
    </div>
  );

  const settings = useSelector(selectors.selectSettings);

  useEffect(() => {
    dispatch(actions.doInit());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    
      <ContentWrapper>
        <PageTitle>
          {/* {i18n('entities.setup.title')} */}
        </PageTitle>
        <div className={classes.root}>
      <Grid container spacing={3}>
      {admin_menus
          .filter((menu) => match(menu.permissionRequired))
          .map((menu) => (
        <Grid item xs={3} >
              <Card className={classes.jss28}>
            <CardActionArea>
            <CardMedia
          className={classes.media}
          image={menu.avater}
          title="Contemplative Reptile"
        />
            <CardContent>
            <CustomRouterLink key={menu.path} to={menu.path}>
              <Button size="small" color="primary">
              <Typography gutterBottom variant="h5" component="h2">
              {menu.label}
                </Typography>  
              </Button>
              </CustomRouterLink>
                
              </CardContent>
            </CardActionArea>
       
          </Card>
        </Grid>
    
      ))}
        </Grid>
    </div>
      
    
      </ContentWrapper>
    </>
  );
};

export default SetupFormPage;
