import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { i18n } from 'src/i18n';
import TodaysFocus from 'src/view/dashboard/DashboardTodaysFocus';
import NotificationList from 'src/view/dashboard/Notifications';

const useStyles = makeStyles((theme) => ({
  chartWrapper: {
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

function DashboardPage(props) {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          padding: 0,
        }}
      >
      <Grid spacing={2} container>
         {/*  <Grid item xl={12} lg={12} md={6} sm={12} xs={12}>
            <div className={classes.chartWrapper}>
                Here we will put a Greeting and a dismissable alert
            </div>
          </Grid> */}
  
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
     
              <TodaysFocus />
 
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        
                <NotificationList />
        
          </Grid>
  </Grid>

        <p
          style={{
            marginTop: '16px',
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
         {/*  {i18n('dashboard.message')} */}
        </p>
      </div>
    </>
  );
}

export default DashboardPage;
