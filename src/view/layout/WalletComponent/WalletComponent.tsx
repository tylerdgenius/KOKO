// import {

//   Button,
//   Grid,
//   Box,
// } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// //import UndoIcon from '@material-ui/icons/Undo';
// import { Link } from 'react-router-dom';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

// import  React, { useEffect, useState } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { i18n } from 'src/i18n';
// // import actions from 'src/modules/wallet/list/walletListActions';
// // import selectors from 'src/modules/wallet/list/walletListSelectors';
// import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { makeStyles } from '@material-ui/core/styles';
// // import WalletListModal from 'src/view/wallet/list/WalletListModal';

// const schema = yup.object().shape({
//   name: yupFilterSchemas.string(
//     i18n('entities.wallet.fields.name'),
//   ),
//   birthdateRange: yupFilterSchemas.dateRange(
//     i18n('entities.wallet.fields.birthdateRange'),
//   ),
//   gender: yupFilterSchemas.enumerator(
//     i18n('entities.wallet.fields.gender'),
//   ),
//   datetimerange: yupFilterSchemas.datetime(
//     i18n('entities.wallet.fields.datetimerange'),
//   ),
//   walletbalance: yupFilterSchemas.decimal(
//     i18n('entities.wallet.fields.walletbalance'),
//   ),
//   timeframe: yupFilterSchemas.enumerator(
//     i18n('entities.wallet.fields.timeframe'),
//   ),
// });

// const emptyValues = {
//   name: null,
//   birthdateRange: [],
//   gender: null,
//   datetimerange: null,
//   walletbalance: null,
//   timeframe: null,
// }


// const useStyles = makeStyles({
//   root: {
    
//     flexGrow: 1,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 30,
    
//   },

//   titleLarge: {
//     fontSize: 23,
//     textAlign: 'center',
//   },
//   pos: {
//     marginBottom: 12,
//   },

//     moveText: {
//       textAlign: 'left',
//     },
  
//     classbox: {
      
//       border: '2px solid white',
//       borderRadius: 10,
//       background: 'linear-gradient(180deg, #c3c8df, #7C8BD0  90%)',
//       boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
//       padding: 8,
     
//     },
//     topLeftBox: {
//       justifyContent: "flex-start",
//       alignItems: "flex-start"
//     },
  
//     Buttonbox: {
    
//       display: "flex",
//       border: 0,
//       padding: 8
//     },
//     RightBox: {
//       justifyContent: "flex-end",
//       alignItems: "flex-end"
//     },
  

// });


// const userId = '60ef650da0dbfd000fffda0e'





 function WalletComponent(props) {
//   const rawFilter = useSelector(selectors.selectRawFilter);
//   const dispatch = useDispatch();
//   const [expanded, setExpanded] = useState(false);

//   const [initialValues] = useState(() => {
//     const record = props.record || {};

//     return {
//       name: record.name,
//       gender: record.gender,
//       timeframe: record.timeframe,
//     };
//   });

//   const form = useForm({
//     resolver: yupResolver(schema),
//     mode: 'all',
//     defaultValues: initialValues as any,
//   });

//   useEffect(() => {
//     dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
//     // eslint-disable-next-line
//   }, [dispatch]);

//   const onSubmit = (values) => {
//     const rawValues = form.getValues();
//     dispatch(actions.doFetch(values, rawValues));
//     setExpanded(false);
//   };

 
  

//   const classes = useStyles();
//   return (
   
//     <div className={classes.root}style={{ width: "100%"}}>
//     <Grid item xs={3}> 
//     <Box bgcolor="primary.main" className={` ${classes.classbox}`} color="primary.contrastText"
//             >

//           <Box  p={1} m={0}  className={` ${classes.title}`}>
//             {i18n('common.walletTop')}  
//             </Box>

//       <Grid container spacing={3}>
    
        
//         <Grid item xs>
//         <Box flexDirection="row" p={1} m={0}>
//         <WalletListModal />
//         <br />
//             </Box>
//         </Grid>
//         <Grid item xs>
      
//         </Grid>
//         <Grid item xs>
        
//         <Box flexDirection="row-reverse" p={1} m={0}>
//             <Button
//             component={Link}
//             to="/wallet/list"
//              style={{ color: "white", fontSize: 22}}>Balance <br />
//               NGN1200
//             </Button>
//             </Box>
//         </Grid>
//       </Grid>
//       </Box>
    
//     </Grid>
    
    
//     </div>

         
        


      
 
//   );
 }

 export default WalletComponent;


