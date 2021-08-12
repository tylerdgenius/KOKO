import React from 'react';
import { i18n } from 'src/i18n';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Link } from 'react-router-dom';


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

function AppointmentListPage(props) {
  const classes = useStyles();
  const rows = [{id:'0',PageTile:'Default hospital',logo:'/images/usAsIS.png', path: '/defaulthospital'},{id:'1',PageTile:'Existing Hospital',logo:'/images/usAsIS.png', path: '/existinghospital'},{id:'1',PageTile:'Create Hospital',logo:'/images/usAsIS.png', path: '/createhospital'}];
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
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.onboarding.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.onboarding.list.title')}
        </PageTitle>

        <div className={classes.root}>
      <Grid container spacing={3}>
      {
      rows.map((row) => (
        <Grid item xs={4} >
              <Card className={classes.jss28}>
            <CardActionArea>
            <CustomRouterLink key={row.path} to={row.path}>
            <CardMedia
          className={classes.media}
          image={row.logo}
          title={row.PageTile}
        />
          
            <CardContent>
         
              <Button size="small" color="primary">
              <Typography gutterBottom variant="h5" component="h2">
              {row.PageTile}
                </Typography>  
              </Button>
           
                
              </CardContent>
              </CustomRouterLink>
            </CardActionArea>
       
          </Card>
        </Grid>
     ))}
  
        </Grid>
    </div>
      </ContentWrapper>
    </>
  );
}

export default AppointmentListPage;
