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
import SelectFormItem from "src/view/shared/form/items/SelectFormItem";
import organizationsetupEnumerators from 'src/modules/organizationsetup/organizationsetupEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(i18n("entities.organizationsetup.fields.name"), {
    required: true,
    min: 2,
    max: 255,
  }),
  email: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.email"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  shortcode: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.shortcode"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  domain: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.domain"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  description: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.description"),
    {
      required: true,
      min: 2,
      max: 500,
    }
  ),
  phoneno: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.phoneno"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  address1: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.address1"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  address2: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.address2"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  Regno: yupFormSchemas.string(
    i18n("entities.organizationsetup.fields.Regno"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  logo: yupFormSchemas.string(i18n("entities.organizationsetup.fields.logo"), {
    required: true,
    min: 2,
    max: 255,
  }),
  dateofestablishment: yupFormSchemas.date(
    i18n("entities.organizationsetup.fields.dateofestablishment"),
    {}
  ),
  country_code: yupFormSchemas.enumerator(
    i18n("entities.organizationsetup.fields.country_code"),
    {
      options: organizationsetupEnumerators.country_code,
    }
  ),
  state_code: yupFormSchemas.enumerator(
    i18n("entities.organizationsetup.fields.state_code"),
    {
      options: organizationsetupEnumerators.state_code,
    }
  ),
  lga_code: yupFormSchemas.enumerator(
    i18n("entities.organizationsetup.fields.lga_code"),
    {
      options: organizationsetupEnumerators.lga_code,
    }
  ),
  organisation_type: yupFormSchemas.enumerator(
    i18n("entities.organizationsetup.fields.organisation_type"),
    {
      options: organizationsetupEnumerators.organisation_type,
    }
  ),
  status: yupFormSchemas.enumerator(
    i18n("entities.organizationsetup.fields.status"),
    {
      options: organizationsetupEnumerators.status,
    }
  ),
});

function OrganizationsetupForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

     return {
       name: record.name,
       email: record.email,
       shortcode: record.shortcode,
       domain: record.domain,
       description: record.description,
       phoneno: record.phoneno,
       address1: record.address1,
       address2: record.address2,
       Regno: record.Regno,
       logo: record.logo,
       dateofestablishment: record.dateofestablishment
         ? moment(record.dateofestablishment, "YYYY-MM-DD")
         : null,
       country_code: record.country_code,
       state_code: record.state_code,
       lga_code: record.lga_code,
       organisation_type: record.organisation_type,
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
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n("entities.organizationsetup.fields.name")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n("entities.organizationsetup.fields.email")}
                required={true}
                autoFocus
              />
            </Grid>

            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="shortcode"
                label={i18n("entities.organizationsetup.fields.shortcode")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="domain"
                label={i18n("entities.organizationsetup.fields.domain")}
                required={true}
                autoFocus
              />
              organisation_type
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n("entities.organizationsetup.fields.description")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address1"
                label={i18n("entities.organizationsetup.fields.address1")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address2"
                label={i18n("entities.organizationsetup.fields.address2")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="Regno"
                label={i18n("entities.organizationsetup.fields.Regno")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="logo"
                label={i18n("entities.organizationsetup.fields.logo")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateofestablishment"
                label={i18n(
                  "entities.organizationsetup.fields.dateofestablishment"
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="country_code"
                label={i18n("entities.organizationsetup.fields.country_code")}
                options={organizationsetupEnumerators.country_code.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.organizationsetup.enumerators.country_code.${value}`
                    ),
                  })
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="status"
                label={i18n("entities.organizationsetup.fields.status")}
                options={organizationsetupEnumerators.status.map((value) => ({
                  value,
                  label: i18n(
                    `entities.organizationsetup.enumerators.status.${value}`
                  ),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="state_code"
                label={i18n("entities.organizationsetup.fields.state_code")}
                options={organizationsetupEnumerators.state_code.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.organizationsetup.enumerators.state_code.${value}`
                    ),
                  })
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="lga_code"
                label={i18n("entities.organizationsetup.fields.lga_code")}
                options={organizationsetupEnumerators.lga_code.map((value) => ({
                  value,
                  label: i18n(
                    `entities.organizationsetup.enumerators.lga_code.${value}`
                  ),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="organisation_type"
                label={i18n(
                  "entities.organizationsetup.fields.organisation_type"
                )}
                options={organizationsetupEnumerators.organisation_type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.organizationsetup.enumerators.organisation_type.${value}`
                    ),
                  })
                )}
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

export default OrganizationsetupForm;
