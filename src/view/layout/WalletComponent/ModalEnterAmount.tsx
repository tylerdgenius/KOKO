import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';




function  ModalEnterAmount(props) {
 
  return (

    
        <form>
          <Grid spacing={2} container>
           

            
            
            <Grid item lg={7} md={8} sm={12} xs={12}>
            <TextField
          id="standard-number"
          label="ENTER AMOUNT"
          type="number"
          defaultValue="535"
          InputLabelProps={{
            shrink: true,
          }}
        />
            </Grid>
         
          </Grid>
         
          <br />
            <Button
            variant="contained"
            color="primary" href="https://flutterwave.com/pay/plfqqz92tplz">
                Load Wallet
            </Button>

           
        
        </form>
  );
}

export default  ModalEnterAmount;



