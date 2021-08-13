import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
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
import appointmentEnumerators from 'src/modules/appointment/appointmentEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AppointmentCalendarPage from './AppointmentCalendarPage';
import swal from 'sweetalert';



const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.appointment.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.appointment.fields.birthdate'),
    {},
  ),
  // gender: yupFormSchemas.enumerator(
  //   i18n('entities.appointment.fields.gender'),
  //   {
  //     // "options": appointmentEnumerators.gender
  //   },
  // ),
});

function AppointmentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD') : null,
      gender: record.gender,
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

  // const swal = {
  //   swal({
  //     title: "Good job!",
  //     text: "You clicked the button!",
  //     icon: "success",
  //     button: "Aww yiss!",
  //   });
  // }
  useEffect(() => {
    swal({
      text: "Provider Not Available ....",
      // content: el,
      buttons: {
        confirm: {
          /*
           * We need to initialize the value of the button to
           * an empty string instead of "true":
           */
          value: "DEFAULT_INPUT_TEXT",
        },
      },
    })
 
  }, [])


  return (
    <FormWrapper>
      {/* <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.appointment.fields.name')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="birthdate"
                label={i18n('entities.appointment.fields.birthdate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.appointment.fields.gender')}
                options={appointmentEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.appointment.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
          </Grid>
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
        </FormProvider> */}
        <AppointmentCalendarPage /> 
    
    </FormWrapper>
  );
}

export default AppointmentForm;
