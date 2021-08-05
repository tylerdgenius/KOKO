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
import drugsEnumerators from 'src/modules/drugs/drugsEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

const schema = yup.object().shape({
  drugcode: yupFormSchemas.string(i18n("entities.drugs.fields.drugcode"), {
    required: true,
    min: 2,
    max: 255,
  }),
  drugName: yupFormSchemas.string(
    i18n("entities.drugs.fields.drugName"),
    {
      required: true,
      min: 2,
      max: 500,
    }
  ),
  description: yupFormSchemas.string(
    i18n("entities.drugs.fields.description"),
    {
      required: true,
      min: 2,
      max: 500,
    }
  ),
  status: yupFormSchemas.enumerator(i18n("entities.drugs.fields.status"), {
    options: drugsEnumerators.status,
  }),
  drugkind: yupFormSchemas.enumerator(i18n("entities.drugs.fields.drugkind"), {
    options: drugsEnumerators.drugkind,
  }),
  drugcategory: yupFormSchemas.enumerator(
    i18n("entities.drugs.fields.drugcategory"),
    {
      options: drugsEnumerators.drugcategory,
    }
  ),
});

function DrugsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      drugcode: record.nadrugcodeme,
      description: record.description,
      drugkind: record.drugkind,
      drugcategory: record.drugcategory,
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
                name="drugcode"
                label={i18n("entities.drugs.fields.drugcode")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="drugName"
                label={i18n("entities.drugs.fields.drugName")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n("entities.drugs.fields.description")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="drugkind"
                label={i18n("entities.drugs.fields.drugkind")}
                options={drugsEnumerators.drugkind.map((value) => ({
                  value,
                  label: i18n(`entities.drugs.enumerators.drugkind.${value}`),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="drugcategory"
                label={i18n("entities.drugs.fields.drugcategory")}
                options={drugsEnumerators.drugcategory.map((value) => ({
                  value,
                  label: i18n(
                    `entities.drugs.enumerators.drugcategory.${value}`
                  ),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="status"
                label={i18n("entities.drugs.fields.status")}
                options={drugsEnumerators.status.map((value) => ({
                  value,
                  label: i18n(`entities.drugs.enumerators.status.${value}`),
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

export default DrugsForm;
