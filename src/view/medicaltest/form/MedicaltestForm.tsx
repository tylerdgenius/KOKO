import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import medicaltestEnumerators from 'src/modules/medicaltest/medicaltestEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';

const schema = yup.object().shape({
  medicaltestcode: yupFormSchemas.string(
    i18n("entities.medicaltest.fields.medicaltestcode"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  description: yupFormSchemas.string(
    i18n("entities.medicaltest.fields.description"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  medicaltestkind: yupFormSchemas.string(
    i18n("entities.medicaltest.fields.medicaltestkind"),
    {
      options: medicaltestEnumerators.medicaltestkind,
    }
  ),
  medicaltestcategory: yupFormSchemas.enumerator(
    i18n("entities.medicaltest.fields.medicaltestcategory"),
    {
      options: medicaltestEnumerators.medicaltestcategory,
    }
  ),
  status: yupFormSchemas.enumerator(
    i18n("entities.medicaltest.fields.status"),
    {
      options: medicaltestEnumerators.status,
    }
  ),
});

function MedicaltestForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      medicaltestcode: record.medicaltestcode,
      description: record.description,
      medicaltestkind: record.medicaltestkind,
      medicaltestcategory: record.medicaltestcategory,
      status: record.status,
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
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="medicaltestcode"
                label={i18n("entities.medicaltest.fields.medicaltestcode")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n("entities.medicaltest.fields.description")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="medicaltestkind"
                label={i18n("entities.medicaltest.fields.medicaltestkind")}
                options={medicaltestEnumerators.medicaltestkind.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.medicaltest.enumerators.medicaltestkind.${value}`
                    ),
                  })
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="medicaltestcategory"
                label={i18n("entities.medicaltest.fields.medicaltestcategory")}
                options={medicaltestEnumerators.medicaltestcategory.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.medicaltest.enumerators.medicaltestcategory.${value}`
                    ),
                  })
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="status"
                label={i18n("entities.medicaltest.fields.status")}
                options={medicaltestEnumerators.status.map((value) => ({
                  value,
                  label: i18n(
                    `entities.medicaltest.enumerators.status.${value}`
                  ),
                }))}
                required={false}
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

export default MedicaltestForm;
