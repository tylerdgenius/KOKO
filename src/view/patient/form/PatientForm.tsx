import { Button, Grid, IconButton, makeStyles, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import userservice from 'src/modules/user/userService';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import patientEnumerators from 'src/modules/patient/patientEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import { PhotoCamera } from '@material-ui/icons';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';

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
  
  title: yupFormSchemas.enumerator(
    i18n('entities.profile.fields.title'),
    {
      "options": patientEnumerators.title
    },
  ),
  LastName: yupFormSchemas.string(
    i18n('user.fields.lastname'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  FirstName: yupFormSchemas.string(
    i18n('user.fields.firstname'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  MiddleName: yupFormSchemas.string(
    i18n('user.fields.middlename'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Email: yupFormSchemas.string(
    i18n('user.fields.email'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Phonenumber: yupFormSchemas.string(
    i18n('user.fields.phonenumber'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Address: yupFormSchemas.string(
    i18n('user.fields.address'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Stateoforigin: yupFormSchemas.string(
    i18n('entities.profile.fields.stateoforigin'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Allergies: yupFormSchemas.string(
    i18n('entities.profile.fields.middlename'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Cityofresidence: yupFormSchemas.string(
    i18n('entities.profile.fields.cityofresidence'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Stateofresidence: yupFormSchemas.string(
    i18n('entities.profile.fields.stateofresidence'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.profile.fields.birthdate'),
    {},
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.profile.fields.gender'),
    {
      "options": patientEnumerators.gender
    },
  ),
  bloodgroup: yupFormSchemas.enumerator(
    i18n('entities.profile.fields.bloodgroup'),
    {
      "options": patientEnumerators.bloodgroup
    },
  ),
  genotype: yupFormSchemas.enumerator(
    i18n('entities.profile.fields.genotype'),
    {
      "options": patientEnumerators.genotype
    },
  ),
});

function PatientForm(props) {

  const dispatch = useDispatch();
  const saveLoading = useSelector(
    selectors.selectLoadingUpdateProfile,
  );

  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  
    const record = currentUser || {};
    let initialValues = record;

    
  const getAllData = async() => {
    await userservice.getUserProfile(currentUser.id).then(res => {
      initialValues = {
        firstName: record.firstName,
        lastName: record.lastName,
        middleName: record.middleName,
        phoneNumber: record.phoneNumber,
        email: record.email,
        avatars: record.avatars || [],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        ...res
      };

    })
    console.log(initialValues);
    return  initialValues;
  } 
  
  console.log(initialValues);
  getAllData().then(res => initialValues = res);
  console.log(initialValues);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    console.log(values)
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
        <h2>Update Profile</h2>
          <Grid spacing={2} container>
          <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="title"
                options={patientEnumerators.title.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.profile.enumerators.title.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="firstName"
                label={i18n('user.fields.firstName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('user.fields.lastName')}  
                required={true}
              autoFocus
              />
            </Grid>
         
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
               name="middleName"
               label={i18n('user.fields.middleName')}   
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('user.fields.email')}
                autoComplete="email" 
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                 name="phoneNumber"
                 label={i18n('user.fields.phoneNumber')}
                 autoComplete="phoneNumber"
                 prefix="+" 
                 required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <DatePickerFormItem
                name="birthdate"
                label={i18n('entities.profile.fields.birthdate')}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
            <InputFormItem
                name="allergies"
                label={i18n('entities.profile.fields.allergies')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
            <TextField 
                type="text"
                name="address"
                label={i18n('entities.profile.fields.address')} 
                required={true}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                />
            </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextField 
                id="stateoforigin"
                name="stateoforigin"
                label={i18n('entities.profile.fields.stateoforigin')}  
                required={true}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextField 
                id="stateofresidence"
                name="stateofresidence"
                label={i18n('entities.profile.fields.stateofresidence')}  
                required={true}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextField 
                id="cityofresidence"
                name="cityofresidence"
                label={i18n('entities.profile.fields.cityofresidence')}   
                required={true}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
               />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.profile.fields.gender')}
                options={patientEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.profile.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="bloodgroup"
                label={i18n('entities.profile.fields.bloodgroup')}
                options={patientEnumerators.bloodgroup.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.profile.enumerators.bloodgroup.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="genotype"
                label={i18n('entities.profile.fields.genotype')}
                options={patientEnumerators.genotype.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.profile.enumerators.genotype.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            </Grid>
        </Card>
          
        <FormButtons>
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

export default PatientForm;


