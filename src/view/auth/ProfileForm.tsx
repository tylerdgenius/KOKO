import { Button, TextField, Grid, Card, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { useForm, FormProvider } from 'react-hook-form';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import userservice from 'src/modules/user/userService';
import React, { useEffect, useState } from 'react';
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
import profileEnumerators from 'src/modules/user/userEnumerators';
import { getPositionOfLineAndCharacter } from 'typescript';
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

    // // Call Endpoint with await to get others
    // const others =userservice.getUserProfile(record.id);    

    // console.log(others)

    let profile ;

    const [repo, setProfile] = useState('');

    /* const  getothers = async () =>{
  
    // const profilesss = JSON.stringify(profile);
    // console.log(profilesss)
    // setProfile(profilesss);
     return profile;
    } */

 
 
 

// useEffect(() => {
//   // getothers()
// }, [])

 
   // This is an Asynchronous function
   userservice.getUserProfile(currentUser.id).then(res => {
    profile = res;
  initialValues.Others = res;
  
  })

  const [initialValues] = useState(() => {
    const record = currentUser || {};
   
    

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      middleName: record.middleName,
      phoneNumber: record.phoneNumber,
      email: record.email,
      avatars: record.avatars || [],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
       Others: {} as 
       {allergies: string, id: any,address:any,stateoforigin:string,bloodgroup:string,genotype:string,relative:string,nok:string,birthdate:string,noknumber:string,gender:string,cityofresidence:string,stateofresidence:string}  // strongly typing the outcome
    };


  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
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
                options={profileEnumerators.title.map(
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
           <TextField 
               id="allergies"
                name="allergies"
                label={i18n('entities.profile.fields.allergies')}  
                autoComplete="allergies"
                value={initialValues.Others.allergies}
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
                type="text"
                name="address"
                label={i18n('entities.profile.fields.address')} 
                required={true}
                value={initialValues.Others.address}
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
                value={initialValues.Others.stateoforigin}
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
                value={initialValues.Others.stateofresidence}
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
                value={initialValues.Others.cityofresidence}
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
                options={profileEnumerators.gender.map(
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
                 <TextField 
                  id="relative"
                  name="relative"
                  label={i18n('entities.profile.fields.relative')}   
                  required={true}
                  value={initialValues.Others.relative}
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
                    name="nok"
                    label={i18n('entities.profile.fields.nok')}  
                    required={true}
                    value={initialValues.Others.nok}
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
                    name="noknumber"
                    label={i18n('entities.profile.fields.noknumber')}  
                    required={true}
                    value={initialValues.Others.noknumber}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
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
