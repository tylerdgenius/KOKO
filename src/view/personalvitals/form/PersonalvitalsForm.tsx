import { AppBar, Button, Grid, TextField, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HeightIcon from '@material-ui/icons/Height';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import personalvitalsEnumerators from 'src/modules/personalvitals/personalvitalsEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import { AccountCircle } from '@material-ui/icons';

const schema = yup.object().shape({
  temperature: yupFormSchemas.string(i18n('entities.personalvitals.fields.temperature'), {
    required: true,
    min: 2,
    max: 255,
  }),
  
  weight: yupFormSchemas.string(i18n('entities.personalvitals.fields.weight'), {
    required: true,
    min: 2,
    max: 255,
  }),
  height: yupFormSchemas.string(i18n('entities.personalvitals.fields.height'), {
    required: true,
    min: 2,
    max: 255,
  }),
  bmi: yupFormSchemas.string(i18n('entities.personalvitals.fields.bmi'), {
    required: true,
    min: 2,
    max: 255,
  }),
  bloodpressure: yupFormSchemas.string(i18n('entities.personalvitals.fields.bloodpressure'), {
    required: true,
    min: 2,
    max: 255,
  }),
  pulse: yupFormSchemas.string(i18n('entities.personalvitals.fields.pulse'), {
    required: true,
    min: 2,
    max: 255,
  }),
});

function PersonalvitalsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      tempearture: record.temperature,
      weight: record.weight,
      height: record.height,
      bmi: record.bmi,
      bloodpressure: record.bloodpressure,
      pulse: record.pulse,
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

  return (
          
    <FormWrapper>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Update Vitals
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  name="Temperature"
                  label={i18n("entities.personalvitals.fields.temperature")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WhatshotIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  name="Weight"
                  label={i18n("entities.personalvitals.fields.weight")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FitnessCenterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  name="Height"
                  label={i18n("entities.personalvitals.fields.height")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HeightIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  name="BMI"
                  label={i18n("entities.personalvitals.fields.bmi")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AirlineSeatFlatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  name="Bloodpressure"
                  label={i18n("entities.personalvitals.fields.bloodpressure")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DirectionsRunIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  name="Pulse"
                  label={i18n("entities.personalvitals.fields.pulse")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FavoriteIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Grid>
        </Grid>
          <FormButtons
            style={{
              flexDirection: modal ? "row-reverse" : undefined,
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
              {i18n("common.save")}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n("common.reset")}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n("common.cancel")}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default PersonalvitalsForm;
