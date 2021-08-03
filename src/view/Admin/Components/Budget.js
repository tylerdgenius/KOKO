import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  ListItemAvatar,
  Typography,makeStyles
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import red from '@material-ui/core/colors/red';
import logo from "../../../assets/img/budget-finance-paper-icon-simple-style-vector-26801190.jpg";

const useStyles = makeStyles({

  jss28: {
      flexGrow: 1,
      width: '100%',
      cursor: 'pointer',
      // margin: '0 auto',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      ' &:hover': {
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      }
  },


});



const primary = '#f50057'; // 

const Budget = (props) => { 
  
const classes = useStyles();  
  return (
  
  <Card 
 
    sx={{ height: '2%' }}
    {...props}
    className={classes.jss28}
  >
  <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            BUDGET
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            $24,000
          </Typography>
        </Grid>
        <Grid item style={{ flex: 9 }}> 
        <ListItemAvatar>
            <img
              alt='hello'
              src={logo}             
              style={{
                height: 150,
                width: 180
              }}
            />
          </ListItemAvatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};

export default Budget;
