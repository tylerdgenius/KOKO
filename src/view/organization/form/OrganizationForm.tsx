import { Button, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";
import React, { useState } from "react";
import { i18n } from "src/i18n";
import FormWrapper, { FormButtons } from "src/view/shared/styles/FormWrapper";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import RadioFormItem from "src/view/shared/form/items/RadioFormItem";
import moment from "moment";
import DatePickerFormItem from "src/view/shared/form/items/DatePickerFormItem";
import organizationEnumerators from "src/modules/organization/organizationEnumerators";
import SelectFormItem from "src/view/shared/form/items/SelectFormItem";
import ImagesUploader from "src/view/shared/uploaders/ImagesUploader";

const schema = yup.object().shape({

  name: yupFormSchemas.string(i18n("entities.organization.fields.name"), {
    required: true,
    min: 2,
    max: 255,
  }),
  shortcode: yupFormSchemas.string(
    i18n("entities.organization.fields.shortcode"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  domain: yupFormSchemas.string(i18n("entities.organization.fields.domain"), {
    required: true,
    min: 2,
    max: 255,
  }),
  Regno: yupFormSchemas.string(i18n("entities.organization.fields.Regno"), {
    required: true,
    min: 2,
    max: 255,
  }),
  description: yupFormSchemas.string(
    i18n("entities.organization.fields.description"),
    {
      required: true,
      min: 2,
      max: 500,
    }
  ),
  organisation_type: yupFormSchemas.enumerator(
    i18n("entities.organization.fields.organisation_type"),
    {
      options: organizationEnumerators.organisation_type,
    }
  ),
  phoneno: yupFormSchemas.string(i18n("entities.organization.fields.phoneno"), {
    required: true,
    min: 2,
    max: 255,
  }),
  dateofestablishment: yupFormSchemas.date(
    i18n("entities.organization.fields.dateofestablishment"),
    {}
  ),
  address1: yupFormSchemas.string(
    i18n("entities.organization.fields.address1"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  address2: yupFormSchemas.string(
    i18n("entities.organization.fields.address2"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  geoAddress: yupFormSchemas.string(
    i18n("entities.organization.fields.geoAddress"),
    {
      required: true,
      min: 2,
      max: 255,
    }
  ),
  country_code: yupFormSchemas.enumerator(
    i18n("entities.organization.fields.country_code"),
    {
      options: organizationEnumerators.country_code,
    }
  ),
  state_code: yupFormSchemas.enumerator(
    i18n("entities.organization.fields.state_code"),
    {
      options: organizationEnumerators.state_code,
    }
  ),
  lga_code: yupFormSchemas.enumerator(
    i18n("entities.organization.fields.lga_code"),
    {
      options: organizationEnumerators.lga_code,
    }
  ),
});

function OrganizationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      
      name: record.name,
      shortcode: record.shortcode,
      domain: record.domain,
      Regno: record.Regno,
      description: record.description,
      organisation_type: record.organisation_type,
      phoneno: record.phoneno,
      address1: record.address1,
      address2: record.address2,
      geoAddress: record.geoAddress,
      dateofestablishment: record.dateofestablishment
        ? moment(record.dateofestablishment, "YYYY-MM-DD")
        : null,
      country_code: record.country_code,
      state_code: record.state_code,
      lga_code: record.lga_code,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
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
              {i18n("entities.organization.fields.logo")}
              <ImagesUploader  />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n("entities.organization.fields.name")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="shortcode"
                label={i18n("entities.organization.fields.shortcode")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="domain"
                label={i18n("entities.organization.fields.domain")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="Regno"
                label={i18n("entities.organization.fields.Regno")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n("entities.organization.fields.description")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="organisation_type"
                label={i18n("entities.organization.fields.organisation_type")}
                options={organizationEnumerators.organisation_type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.organization.enumerators.organisation_type.${value}`
                    ),
                  })
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phoneno"
                label={i18n("entities.organization.fields.phoneno")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateofestablishment"
                label={i18n("entities.organization.fields.dateofestablishment")}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address1"
                label={i18n("entities.organization.fields.address1")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address2"
                label={i18n("entities.organization.fields.address2")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <InputFormItem
                name="geoAddress"
                label={i18n("entities.organization.fields.geoAddress")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="country_code"
                label={i18n("entities.organization.fields.country_code")}
                options={organizationEnumerators.country_code.map((value) => ({
                  value,
                  label: i18n(
                    `entities.organization.enumerators.country_code.${value}`
                  ),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="state_code"
                label={i18n("entities.organization.fields.state_code")}
                options={organizationEnumerators.state_code.map((value) => ({
                  value,
                  label: i18n(
                    `entities.organization.enumerators.state_code.${value}`
                  ),
                }))}
                required={false}
              />
            </Grid>
            <Grid item lg={6} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="lga_code"
                label={i18n("entities.organization.fields.lga_code")}
                options={organizationEnumerators.lga_code.map((value) => ({
                  value,
                  label: i18n(
                    `entities.organization.enumerators.lga_code.${value}`
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

export default OrganizationForm;
