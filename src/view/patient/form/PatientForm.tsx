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
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import patientEnumerators from 'src/modules/patient/patientEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import { PhotoCamera } from '@material-ui/icons';

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
    i18n('entities.patient.fields.title'),
    {
      "options": patientEnumerators.title
    },
  ),
  LastName: yupFormSchemas.string(
    i18n('entities.patient.fields.lastname'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  FirstName: yupFormSchemas.string(
    i18n('entities.patient.fields.firstname'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  MiddleName: yupFormSchemas.string(
    i18n('entities.patient.fields.middlename'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Email: yupFormSchemas.string(
    i18n('entities.patient.fields.email'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Phonenumber: yupFormSchemas.string(
    i18n('entities.patient.fields.phonenumber'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Address: yupFormSchemas.string(
    i18n('entities.patient.fields.address'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Stateoforigin: yupFormSchemas.string(
    i18n('entities.patient.fields.stateoforigin'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Allergies: yupFormSchemas.string(
    i18n('entities.patient.fields.middlename'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Cityofresidence: yupFormSchemas.string(
    i18n('entities.patient.fields.cityofresidence'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Stateofresidence: yupFormSchemas.string(
    i18n('entities.patient.fields.stateofresidence'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.patient.fields.birthdate'),
    {},
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.patient.fields.gender'),
    {
      "options": patientEnumerators.gender
    },
  ),
  bloodgroup: yupFormSchemas.enumerator(
    i18n('entities.patient.fields.bloodgroup'),
    {
      "options": patientEnumerators.bloodgroup
    },
  ),
  genotype: yupFormSchemas.enumerator(
    i18n('entities.patient.fields.genotype'),
    {
      "options": patientEnumerators.genotype
    },
  ),
});

function PatientForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      lastname: record.lastname,
      firstname: record.firstname,
      middlename: record.middlename,
      email: record.email,
      phonenumber: record.phonenumber,
      address: record.address,
      stateoforigin: record.stateoforigin,
      allergies: record.allergies,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD') : null,
      gender: record.gender,
      genotype: record.genotype,
      bloodgroup: record.bloodgroup,
      relative: record.relative,
      nok: record.nok,
      noknumber: record.noknumber,
      cityofresidence: record.cityofresidence,
      stateofresidence: record.stateofresidence,
    };
  });

  

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;
  const classes = useStyles();

  return (
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
                label={i18n('entities.patient.fields.title')}
                options={patientEnumerators.title.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patient.enumerators.title.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Lastname"
                label={i18n('entities.patient.fields.lastname')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Firstname"
                label={i18n('entities.patient.fields.firstname')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Middlename"
                label={i18n('entities.patient.fields.middlename')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Email"
                label={i18n('entities.patient.fields.email')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Phonenumber"
                label={i18n('entities.patient.fields.phonenumber')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <DatePickerFormItem
                name="birthdate"
                label={i18n('entities.patient.fields.birthdate')}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
            <InputFormItem
                name="Allergies"
                label={i18n('entities.patient.fields.allergies')}  
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Address"
                label={i18n('entities.patient.fields.address')}  
                required={true}
              />
            </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Stateoforigin"
                label={i18n('entities.patient.fields.stateoforigin')}  
                required={true}
              />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Stateofresidence"
                label={i18n('entities.patient.fields.stateofresidence')}  
                required={true}
              />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <InputFormItem
                name="Cityofresidence"
                label={i18n('entities.patient.fields.cityofresidence')}  
                required={true}
              />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.patient.fields.gender')}
                options={patientEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patient.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="bloodgroup"
                label={i18n('entities.patient.fields.bloodgroup')}
                options={patientEnumerators.bloodgroup.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patient.enumerators.bloodgroup.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <RadioFormItem
                name="genotype"
                label={i18n('entities.patient.fields.genotype')}
                options={patientEnumerators.genotype.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patient.enumerators.genotype.${value}`,
                    ),
                  }),
                )}
                required={true}
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
                    label={i18n('entities.patient.fields.relative')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Nok"
                    label={i18n('entities.patient.fields.nok')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Noknumber"
                    label={i18n('entities.patient.fields.noknumber')}  
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
                label={i18n('entities.patient.fields.donor')}
                options={patientEnumerators.donor.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patient.enumerators.donor.${value}`,
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
          
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
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
  );
}

export default PatientForm;


