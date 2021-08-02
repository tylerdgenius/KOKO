import * as React from 'react';
import { Box, Card, CardActions, Button, Typography, ButtonGroup, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import WalletIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import publishArticleImage from './styles/welcome_illustration.svg';
import CardWithIcon from '../components/CardWithIcon';
import Budget from '../dashboard/Budget';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  



const useStyles = makeStyles(theme => ({
    root: {
        background:
            theme.palette.type === 'dark'
                ? '#535353'
                : `linear-gradient(to right, #2196f3 0%, #2196f3 35%), linear-gradient(to bottom, #2196f3 0%, #2196f3 50%), #6f4ceb`,

        color: '#fff',
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
    media: {
        background: `url(${publishArticleImage}) top right / cover`,
        marginLeft: 'auto',
    },
    actions: {
        [theme.breakpoints.down('md')]: {
            padding: 0,
            flexWrap: 'wrap',
            '& a': {
                marginTop: '1em',
                marginLeft: '0!important',
                marginRight: '1em',
            },
        },
    },
    Buttons: {
        background: "linear-gradient(0.07turn, #3f87a6, #ebf8e1, #2796f3)",
        border: 0,
        borderRadius: 16,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "#000000",
        height: 48,
        padding: "0 30px",
        "&:hover": {
          background: "#e0e0e0;"
        }
      },
      text:{
        color:"#ffffff"
    }
}));
// style={{color:"#fff"}}
function Welcome(props) {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const classes = useStyles();
    return (
        <Card className={classes.root}>
              <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
                 {/* <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} /> */}
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <TotalCustomers /> */}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <TasksProgress /> */}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <TotalProfit sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <Sales /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
                 <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>

        {/* <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
 */}

            {/* <Box display={{  lg: "none" }}>
            <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
                        Welcome {props.UserName}
                    </Typography>

            </Box>
            <Box display="flex">
                <Box flex="1"  display={{ xs: "none", lg: "block" }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Welcome  {props.UserName} ,
                    </Typography>
                    <Box maxWidth="40em">
                        <Typography variant="body1" component="p" gutterBottom>
                            Complete your sign up
                        </Typography>
                    </Box>
                    <CardActions className={classes.actions}>
                        <Button
                        className={classes.Buttons}
                            variant="contained"
                            startIcon={<HomeIcon />}
                            component={Link}
                            to="/profile"
                        >
                            Complete Profile
                        </Button>
                        <Button
                         className={classes.Buttons}
                            variant="contained"
                            startIcon={<CodeIcon />}
                            component={Link}
                            to="/personalvitals"
                        >
                            Update Vitals
                        </Button>
                    </CardActions>
                </Box>

                <Box
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    width="22cm"
                    overflow="hidden" 
                />

                
                <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            
        

                        
            </Box> */}
        </Card>
    );
};

Welcome.propTypes ={
    UserName: PropTypes.string
};

export default Welcome;


// className={classes.media}