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
import actions from 'src/modules/medicaltest/list/medicaltestListActions';
import selectors from 'src/modules/medicaltest/list/medicaltestListSelectors';
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
import medicaltestEnumerators from 'src/modules/medicaltest/medicaltestEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  // medicaltestcode: yupFilterSchemas.string(
  //   i18n("entities.medicaltest.fields.medicaltestcode")
  // ),
  // description: yupFilterSchemas.string(
  //   i18n("entities.medicaltest.fields.description")
  // ),
  medicaltestkind: yupFilterSchemas.string(
    i18n("entities.medicaltest.fields.medicaltestkind")
  ),
  medicaltestcategory: yupFilterSchemas.enumerator(
    i18n("entities.medicaltest.fields.medicaltestcategory")
  ),
  // status: yupFilterSchemas.enumerator(
  //   i18n("entities.medicaltest.fields.status")
  // ),
});

const emptyValues = {
  // medicaltestcode: null,
  // description: null,
  medicaltestkind: null,
  medicaltestcategory: null,
  // status: null,
};

const previewRenders = {
  // medicaltestcode: {
  //   label: i18n("entities.medicaltest.fields.medicaltestcode"),
  //   render: filterRenders.generic(),
  // },
  // description: {
  //   label: i18n("entities.medicaltest.fields.description"),
  //   render: filterRenders.generic(),
  // },
  medicaltestkind: {
    label: i18n("entities.medicaltest.fields.medicaltestkind"),
    render: filterRenders.enumerator("entities.medicaltest.enumerators.medicaltestkind"),
  },
  medicaltestcategory: {
    label: i18n("entities.medicaltest.fields.medicaltestcategory"),
    render: filterRenders.enumerator(
      "entities.medicaltest.enumerators.medicaltestcategory"
    ),
  },
  // status: {
  //   label: i18n("entities.medicaltest.fields.status"),
  //   render: filterRenders.enumerator("entities.medicaltest.enumerators.status"),
  // },
};

function MedicaltestListFilter(props) {
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
                {/* <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="medicaltestcode"
                    label={i18n("entities.medicaltest.fields.medicaltestcode")}
                  />
                </Grid> */}
                {/* <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="description"
                    label={i18n("entities.medicaltest.fields.description")}
                  />
                </Grid> */}
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="medicaltestkind"
                    label={i18n("entities.medicaltest.fields.medicaltestkind")}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="medicaltestcategory"
                    label={i18n(
                      "entities.medicaltest.fields.medicaltestcategory"
                    )}
                    options={medicaltestEnumerators.medicaltestcategory.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.medicaltest.enumerators.medicaltestcategory.${value}`
                        ),
                      })
                    )}
                  />
                </Grid>
                {/* <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="status"
                    label={i18n("entities.medicaltest.fields.status")}
                    options={medicaltestEnumerators.status.map((value) => ({
                      value,
                      label: i18n(
                        `entities.medicaltest.enumerators.status.${value}`
                      ),
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

export default MedicaltestListFilter;