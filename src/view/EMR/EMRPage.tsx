import { CardContent, Grid, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ConsultationHistory from './component/ConsultationHistory';


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

function EMRPage(props) {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          padding: 0,
        }}
      >
      <Grid spacing={2} container>
    
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Card  style={{
          minHeight: "500px",
        }}>
            <CardHeader title="My Consultations">
      </CardHeader>
            <CardContent>
                 <ConsultationHistory />
            </CardContent>
        </Card>
             
 
          </Grid>

     {/*      <Grid item xl={6} lg={3} md={3} sm={12} xs={12}   >
        
                <GroupsOnline subtitle={"Appointments"} />
        
          </Grid>
          <Grid item xl={6} lg={3} md={3} sm={12} xs={12}  >
                
                <GroupsOnline subtitle={"Notifications"}/>

          </Grid> */}
      
  </Grid>

        <p
          style={{
            marginTop: '16px',
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
   
        </p>
      </div>
    </>
  );
}

export default EMRPage;
