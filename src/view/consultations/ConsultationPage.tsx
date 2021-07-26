import { Avatar,  Card,  CardHeader,  createStyles, Grid, IconButton, makeStyles, TextField, Theme  } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

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

function ConsultationPage(props) {
    const classes = useStyles();

    var hospitals = [
         { name: 'Doreen Hospital', image: '/images/hospital3.jpg' , providers: 4, activeproviders: 3},
         { name: 'Eko Hospital', image: '/images/hospital1.jpg' , providers: 6, activeproviders: 2},
         { name: 'Lilly Clinic', image: '/images/hospital3.jpg' , providers: 8, activeproviders: 1},
         { name: 'New Era Hospital', image: '/images/hospital2.png' , providers: 2, activeproviders: 0},
         { name: 'Christ is King Hospital', image: '/images/hospital3.jpg' , providers: 10, activeproviders: 5},
         { name: 'Amazing Grace Hospital', image: '/images/hospital3.jpg' , providers: 13, activeproviders: 3},
         { name: 'Lagos General Hospital', image: '/images/hospital1.jpg' , providers: 14, activeproviders: 8},
        ]


  return (
    <>
    
    <TextField  placeholder='Hositpals'
                        label='Search for Hositpals'
                        name='searchHospital'
                        id='searchHospital'
                        variant="outlined"
                        fullWidth
                        type='text'
                />

     <div className="mt-2">
     <Card className={`${classes.root} fade-in-bck`}>
     <Grid item lg={12}>
                        <Grid container alignItems="center" spacing={2}>
                        {hospitals.map((row) => (
                                    <Grid item  spacing={2} sm={6} md={4} xs={12} lg={3}>
                                        <Link  style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                }} key='/consultations/child'
                                                     to='/consultations/child'>
                                            <Card>
                                                <CardHeader
                                                            avatar={
                                                            <Avatar variant="rounded" aria-label="recipe" className={classes.avatar} src={row.image}>
                                                                
                                                            </Avatar>
                                                            }
                                                        
                                                            title={row.name}
                                                            subheader={row.providers + " Registered , " + row.activeproviders  + " Active " }
                                                        />
                                            </Card>
                                        </Link>
                           
                                    
                                  
                                    </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    </Card>
                    </div>                    
      </>)
}



export default ConsultationPage;
