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
import branchEnumerators from 'src/modules/branch/branchEnumerators';


const schema = yup.object().shape({
  organizationid: yupFormSchemas.string(
    i18n("entities.branch.fields.organizationid"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  branchcode: yupFormSchemas.string(i18n("entities.branch.fields.branchcode"), {
    required: true,
    min: 2,
    max: 255,
  }),

  branchkind: yupFormSchemas.string(i18n("entities.branch.fields.branchkind"), {
    required: true,
    min: 2,
    max: 255,
  }),
  branchcategory: yupFormSchemas.enumerator(
    i18n("entities.branch.fields.branchcategory"),
    {
      options: branchEnumerators.branchcategory,
    }
  ),
  description: yupFormSchemas.string(
    i18n("entities.branch.fields.description"),
    {
      required: true,
      min: 2,
      max: 520,
    }
  ),
  status: yupFormSchemas.enumerator(i18n("entities.branch.fields.status"), {
    options: branchEnumerators.status,
  }),
});

function BranchForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      organizationid: record.organizationid,
      branchcode: record.branchcode,
      branchkind: record.branchkind,
      branchcategory: record.branchcategory,
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
                name="organizationid"
                label={i18n("entities.branch.fields.organizationid")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="branchcode"
                label={i18n("entities.branch.fields.branchcode")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="branchkind"
                label={i18n("entities.branch.fields.branchkind")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="branchcategory"
                label={i18n("entities.branch.fields.branchcategory")}
                options={branchEnumerators.branchcategory.map((value) => ({
                  value,
                  label: i18n(
                    `entities.branch.enumerators.branchcategory.${value}`
                  ),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n("entities.branch.fields.description")}
                required={true}
                autoFocus
              />
            </Grid>

            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="status"
                label={i18n("entities.branch.fields.status")}
                options={branchEnumerators.status.map((value) => ({
                  value,
                  label: i18n(`entities.branch.enumerators.status.${value}`),
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

export default BranchForm;
