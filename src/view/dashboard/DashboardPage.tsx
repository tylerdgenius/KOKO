import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { i18n } from 'src/i18n';
import TodaysFocus from 'src/view/dashboard/DashboardTodaysFocus';
import NotificationList from 'src/view/dashboard/Notifications';
import GroupsOnline from '../online/groupsOnline';
import PatientForm from 'src/view/patient/form/PatientForm';
import PersonalvitalsListPage from 'src/view/personalvitals/list/PersonalvitalsListPage';
import Welcome from '../layout/MainAlert';
import { useSelector } from 'react-redux';
import authSelectors from 'src/modules/auth/authSelectors';

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

  DashboardCard: {minHeight: '500px'}
}));

function DashboardPage(props) {
  const classes = useStyles();
  const userText = useSelector(
    authSelectors.selectCurrentUserNameOrEmailPrefix,
  );

  

  return (
    <>
       <div>
        
        <Welcome UserName={userText} />
        </div>
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
          
  
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
  
              <TodaysFocus />
 
          </Grid>

          <Grid item xl={6} lg={3} md={3} sm={12} xs={12}   >
        
                <GroupsOnline subtitle={"Appointments"} />
        
          </Grid>
          <Grid item xl={6} lg={3} md={3} sm={12} xs={12}  >
                
                <GroupsOnline subtitle={"Notifications"}/>

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
