import {

  Button,
  Grid,
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import  React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/wallet/list/walletListActions';
import selectors from 'src/modules/wallet/list/walletListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import { makeStyles } from '@material-ui/core/styles';
import walletEnumerators from 'src/modules/wallet/walletEnumerators';

import Select from "react-select";

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.wallet.fields.name'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.wallet.fields.birthdateRange'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.wallet.fields.gender'),
  ),
  datetimerange: yupFilterSchemas.datetime(
    i18n('entities.wallet.fields.datetimerange'),
  ),
  walletbalance: yupFilterSchemas.decimal(
    i18n('entities.wallet.fields.walletbalance'),
  ),
  timeframe: yupFilterSchemas.enumerator(
    i18n('entities.wallet.fields.timeframe'),
  ),
});




const emptyValues = {
  name: null,
  birthdateRange: [],
  gender: null,
  datetimerange: null,
  walletbalance: null,
  timeframe: null,
}


const useStyles = makeStyles({
  root: {
    
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },



  titleLarge: {
    fontSize: 23,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },

    moveText: {
      textAlign: 'left',
      fontSize: 18,
    },

    selectbackground: {
      background: "#023950",
    },
  
  
  

});

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
      background : 'white'
  }),




}


const userId = '60ef650da0dbfd000fffda0e'





function WalletListTranscationDisplay(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      gender: record.gender,
      timeframe: record.timeframe,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };
  

  const classes = useStyles();
  return (
    <FilterWrapper>

<FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

            

              <FilterButtons>
               
             
              
              
                <Grid item lg={12} xs={12}>
            <Box bgcolor="primary.main"  color="primary.contrastText"  p={2} style={{ flex: 1 }}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
        <Box className={classes.moveText}><label  className={classes.moveText}> {i18n('common.recTransact')}</label></Box>
        </Grid>
        <Grid item xs={12} sm={2}>
         
        <Select
                    styles={customStyles}
                    menuColor='red'
                    name="timeframe"
                    label={i18n('entities.wallet.fields.timeframe')}
                    placeholder = "Select Time Frame"
                    options={walletEnumerators.timeframe.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.wallet.enumerators.timeframe.${value}`,
                        ),
                      }),
                    )}
                    />
        </Grid>
      </Grid>
    </div>

                  
        </Box>
           
        
                </Grid>

                

               
              </FilterButtons>
            </form>
          </FormProvider>


      
    </FilterWrapper>
  );
}

export default WalletListTranscationDisplay;


