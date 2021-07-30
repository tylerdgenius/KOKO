import { Button, TextField, Grid, Card, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { useForm, FormProvider } from 'react-hook-form';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import userservice from 'src/modules/user/userService';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Storage from 'src/security/storage';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioFormItem from '../shared/form/items/RadioFormItem';
import { DatePickerFormItem } from '../shared/form/items/DatePickerFormItem';
import patientEnumerators from 'src/modules/patient/patientEnumerators';


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
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      max: 80,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      max: 175,
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  avatars: yupFormSchemas.images(
    i18n('user.fields.avatars'),
    {
      max: 1,
    },
  ),
});

function ProfileFormPage(props) {
  const dispatch = useDispatch();
  const saveLoading = useSelector(
    selectors.selectLoadingUpdateProfile,
  );

  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  const [initialValues] = useState(() => {
    const record = currentUser || {};
 
    // Call Endpoint with await to get others
    const others =userservice.getUserProfile(record.id);    
    console.log(others);
    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      avatars: record.avatars || [],
      Others: others
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
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
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card elevation={10} style={{
          padding: 20,
          marginTop: 5,
        }}>
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
                 autoComplete="firstName"
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
              name="lastName"
              label={i18n('user.fields.lastName')}
              autoComplete="lastName"
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Middlename"
                label={i18n('user.fields.middlename')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
    <TextField
      id="email"
      name="email"
      label={i18n('user.fields.email')}
      value={currentUser.email}
      fullWidth
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      size="small"
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
                name="Allergies"
                label={i18n('entities.profile.fields.allergies')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Address"
                label={i18n('user.fields.address')}  
                required={true}
              />
            </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Stateoforigin"
                label={i18n('entities.profile.fields.stateoforigin')}  
                required={true}
              />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Stateofresidence"
                label={i18n('entities.profile.fields.stateofresidence')}  
                required={true}
              />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Cityofresidence"
                label={i18n('entities.profile.fields.cityofresidence')}  
                required={true}
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
            <Grid item lg={6} md={8} sm={12} xs={12}>
    <ImagesFormItem
      name="avatars"
      label={i18n('user.fields.avatars')}
      storage={Storage.values.userAvatarsProfiles}
      max={1}
    />
  </Grid>
          </Grid>
          </Card>

          <Card elevation={10} style={{
          padding: 20,
          marginTop: 5,
        }}>
        <h2>Family History</h2>
            <Grid spacing={2} container>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Relative"
                    label={i18n('entities.profile.fields.relative')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Nok"
                    label={i18n('entities.profile.fields.nok')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Noknumber"
                    label={i18n('entities.profile.fields.noknumber')}  
                    required={true}
                  />
                </Grid>
          </Grid>
        </Card>
       
          <Card elevation={10} style={{
          padding: 20,
          marginTop: 5,
        }}>
        <h2>Organ Donor?</h2>
            <Grid spacing={2} container>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                <RadioFormItem
                name="donor"
                label={i18n('entities.profile.fields.donor')}
                options={patientEnumerators.donor.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.profile.enumerators.donor.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                <div className={classes.root}>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                          Upload Consent Document
                        </Button>
                      </label>
                </div>
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
  );
}

export default ProfileFormPage;
