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
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import allergiesEnumerators from 'src/modules/allergies/allergiesEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(i18n("entities.allergies.fields.name"), {
    required: true,
    min: 2,
    max: 255,
  }),
  description: yupFormSchemas.string(i18n("entities.allergies.fields.description"), {
    required: true,
    min: 2,
    max: 1000,
  }),

  status: yupFormSchemas.enumerator(i18n("entities.allergies.fields.status"), {
    options: allergiesEnumerators.status,
  }),
});

function AllergiesForm(props) {
  console.log(props)
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      description: record.description,
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
                name="name"
                label={i18n("entities.allergies.fields.name")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n("entities.allergies.fields.description")}
                required={true}
                autoFocus
              />
            </Grid>

            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="status"
                label={i18n("entities.allergies.fields.status")}
                options={allergiesEnumerators.status.map((value) => ({
                  value,
                  label: i18n(`entities.allergies.enumerators.status.${value}`),
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

export default AllergiesForm;
