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
import actions from 'src/modules/drugs/list/drugsListActions';
import selectors from 'src/modules/drugs/list/drugsListSelectors';
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
import drugsEnumerators from 'src/modules/drugs/drugsEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  drugcode: yupFilterSchemas.string(i18n("entities.drugs.fields.drugcode")),
  // description: yupFilterSchemas.string(
  //   i18n("entities.drugs.fields.description")
  // ),
  // drugkind: yupFilterSchemas.enumerator(i18n("entities.drugs.fields.drugkind")),
  // drugcategory: yupFilterSchemas.enumerator(
  //   i18n("entities.drugs.fields.drugcategory")
  // ),
  // status: yupFilterSchemas.enumerator(i18n("entities.drugs.fields.status")),
});

const emptyValues = {
  drugcode: null,
  // birthdateRange: [],
  // gender: null,
};

const previewRenders = {
  drugcode: {
    label: i18n("entities.drugs.fields.drugcode"),
    render: filterRenders.generic(),
  },
  // description: {
  //   label: i18n("entities.drugs.fields.description"),
  //   render: filterRenders.generic(),
  // },
  // drugkind: {
  //   label: i18n("entities.drugs.fields.drugkind"),
  //   render: filterRenders.enumerator("entities.drugs.enumerators.drugkind"),
  // },
  // drugcategory: {
  //   label: i18n("entities.drugs.fields.drugcategory"),
  //   render: filterRenders.enumerator("entities.drugs.enumerators.drugcategory"),
  // },
  // status: {
  //   label: i18n("entities.drugs.fields.status"),
  //   render: filterRenders.enumerator("entities.drugs.enumerators.status"),
  // },
};

function DrugsListFilter(props) {
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
                    name="drugcode"
                    label={i18n("entities.drugs.fields.drugcode")}
                  />
                </Grid>
                {/* <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="description"
                    label={i18n("entities.drugs.fields.description")}
                  />
                </Grid>

                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="drugkind"
                    label={i18n("entities.drugs.fields.drugkind")}
                    options={drugsEnumerators.drugkind.map((value) => ({
                      value,
                      label: i18n(
                        `entities.drugs.enumerators.drugkind.${value}`
                      ),
                    }))}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="drugcategory"
                    label={i18n("entities.drugs.fields.drugcategory")}
                    options={drugsEnumerators.drugcategory.map((value) => ({
                      value,
                      label: i18n(
                        `entities.drugs.enumerators.drugcategory.${value}`
                      ),
                    }))}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="status"
                    label={i18n("entities.drugs.fields.status")}
                    options={drugsEnumerators.status.map((value) => ({
                      value,
                      label: i18n(`entities.drugs.enumerators.status.${value}`),
                    }))}
                  />
                </Grid> */}
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

export default DrugsListFilter;