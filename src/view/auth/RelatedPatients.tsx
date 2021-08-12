import { Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import userservice from 'src/modules/user/userService';
import selectors from 'src/modules/auth/authSelectors';
import actions from 'src/modules/auth/authActions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const schema = yup.object().shape({
  
  relative: yupFormSchemas.string(
    i18n('entities.profile.fields.relative'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  relativenumber: yupFormSchemas.string(
    i18n('entities.profile.fields.relativenumber'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  relativeemail: yupFormSchemas.string(
    i18n('entities.profile.fields.relativeemail'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  relativeaddress: yupFormSchemas.string(
    i18n('entities.profile.fields.relativeaddress'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
});

function RelatedPatientForm(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectLoadingUpdateProfile,
  );

  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  // const record = currentUser || {};
  let initialValues ;

  const getAllData = async() => {
    await userservice.getUserProfile(currentUser.id).then(res => {
      initialValues = {
        relative: res.relative,
      relativenumber: res.relativenumber,
      relativeaddress: res.relativeaddress,
      relativeemail: res.relativeemail,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            };

    })
  
    return  initialValues;
  } 
  
  getAllData().then(res => initialValues = res);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues ,
  });

  const onSubmit = (values) => {
    dispatch(actions.doUpdateProfile(values));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const classes = useStyles();

  return (
    <div>
          <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
       
        <Card elevation={10} style={{
          padding: 20,
          marginTop: 5,
        }}>
        <h2>Related Patients <span>(not required)</span> </h2>
       
            <Grid spacing={2} container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="relative"
                    label={i18n('entities.profile.fields.relative')}  
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="relativenumber"
                    label={i18n('entities.profile.fields.relativenumber')}  
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="relativeemail"
                    label={i18n('entities.profile.fields.relativeemail')} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="relativeaddress"
                    label={i18n('entities.profile.fields.relativeaddress')}  
                  />
                </Grid>
          </Grid>
        </Card>
            
          <FormButtons
           
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
    </div>
  );
}

export default RelatedPatientForm;


