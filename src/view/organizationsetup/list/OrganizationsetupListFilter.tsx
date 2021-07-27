import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organizationsetup/list/organizationsetupListActions';
import selectors from 'src/modules/organizationsetup/list/organizationsetupListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import organizationsetupEnumerators from 'src/modules/organizationsetup/organizationsetupEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(i18n("entities.organizationsetup.fields.name")),
  email: yupFilterSchemas.string(
    i18n("entities.organizationsetup.fields.email")
  ),
  description: yupFilterSchemas.string(
    i18n("entities.organizationsetup.fields.description")
  ),
  shortcode: yupFilterSchemas.string(
    i18n("entities.organizationsetup.fields.shortcode")
  ),
  domain: yupFilterSchemas.string(
    i18n("entities.organizationsetup.fields.domain")
  ),
  phoneno: yupFilterSchemas.string(
    i18n("entities.organizationsetup.fields.phoneno")
  ),
  address1: yupFilterSchemas.string(
    i18n("entities.organizationsetup.fields.address1")
  ),
  address2: yupFilterSchemas.dateRange(
    i18n("entities.organizationsetup.fields.address2")
  ),
  status: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.status")
  ),
  Regno: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.Regno")
  ),
  logo: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.logo")
  ),
  dateofestablishment: yupFilterSchemas.dateRange(
    i18n("entities.customer.fields.dateofestablishment")
  ),
 
  country_code: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.country_code")
  ),
  state_code: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.state_code")
  ),
  lga_code: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.lga_code")
  ),
  organisation_type: yupFilterSchemas.enumerator(
    i18n("entities.organizationsetup.fields.organisation_type")
  ),
});

const emptyValues = {
  name: null,
};

const previewRenders = {
  name: {
    label: i18n("entities.organizationsetup.fields.name"),
    render: filterRenders.generic(),
  },

};


function OrganizationsetupListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) => setExpanded(isExpanded)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n("entities.organizationsetup.fields.name")}
                  />
                </Grid>
                            
            
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n("common.search")}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n("common.reset")}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default OrganizationsetupListFilter;