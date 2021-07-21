import { Avatar,  Badge,  Card,  CardHeader,  createStyles, Grid, IconButton, makeStyles, TextField, Theme  } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Person from 'src/view/consultations/Person';

const useStyles = makeStyles({
     root: {
        width: "100%",
        minHeight: "100vh",
        transition: "0.3s",
        margin: "0 auto",
        borderRadius: "16px",
        cursor: "pointer",
        boxShadow: "0 4px 20px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 8px 40px -12.125px rgba(0,0,0,0.3)",
            transform: "scale(1)",
        },
        padding: '40px'
    },
    title: {
        fontWeight: "bold",
    },
    sub: {
        lineHeight: 1.8,
        fontSize: 12,
    },
    large: {
        width: '25px',
        height: '30px',
      },
      avatar: {
        backgroundColor: red[500],
        width: '60px',
        height: '60px'
      },
});

const handleSubmit = ({});

function AvailableConsultantPage(props) {
    const classes = useStyles();

    var hospitals = [
         { name: 'Dr. Goodness Ezeani', image: '/images/1.jpg' , status: 'Available', Qualification: 'General Practitioner'},
         { name: 'Professor Tina Onyinye', image: '/images/1.jpg' , status: 'Available', Qualification: 'ENT Specialist'},
         { name: 'Dr. Doyin ', image: '/images/1.jpg' , status: 'Available', Qualification: 'General Practitioner'},
         { name: 'Dr. Tolu Awobayo', image: '/images/1.jpg' , status: 'Available', Qualification: 'Consultant, Gynacologist'},

        ]


  return (
      <>
    
 
     <div className="mt-2">
     <Card className={`${classes.root} fade-in-bck`}>
     <Grid item lg={12}>
            <Grid spacing={2}>
            <Grid container alignItems="center"  item  spacing={2} sm={12} md={12} xs={12} lg={12}>
                   <h3>Available Doctors in ABCD Hospital  </h3> 
            </Grid>
            </Grid>
                        <Grid container alignItems="center" spacing={2}>
                        {hospitals.map((row) => (
                                    <Grid item  spacing={2} sm={6} md={4} xs={12} lg={3}>
                                  
                                            <Card>
                                                <CardHeader
                                                            avatar={
                                                                <Person />
                                                            }
                                                        
                                                            title={row.name}
                                                            subheader={row.status + "  " + row.Qualification  }
                                                        />
                                            </Card>
                                  
                           
                                    
                                  
                                    </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    </Card>
                    </div>                    
      </>)
}



export default AvailableConsultantPage;
