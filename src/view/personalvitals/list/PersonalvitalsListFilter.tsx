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
import actions from 'src/modules/personalvitals/list/personalvitalsListActions';
import selectors from 'src/modules/personalvitals/list/personalvitalsListSelectors';
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
import personalvitalsEnumerators from 'src/modules/personalvitals/personalvitalsEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  temperature: yupFilterSchemas.string(i18n("entities.personalvitals.fields.temperature")),
  weight: yupFilterSchemas.string(i18n("entities.personalvitals.fields.weight")),
  height: yupFilterSchemas.string(i18n("entities.personalvitals.fields.height")),
  bloodpresure: yupFilterSchemas.string(i18n("entities.personalvitals.fields.bloodpressure")),
});

const emptyValues = {
  temperature: null,
  weight: null,
  height: null,
  bloodpressure: null,

};

const previewRenders = {
  temperature: {
    label: i18n("entities.personalvitals.fields.temperature"),
    render: filterRenders.generic(),
  },
  weight: {
    label: i18n("entities.personalvitals.fields.weight"),
    render: filterRenders.generic(),
  },
  height: {
    label: i18n("entities.personalvitals.fields.height"),
    render: filterRenders.generic(),
  },
  bloodpressure: {
    label: i18n("entities.personalvitals.fields.bloodpressure"),
    render: filterRenders.generic(),
  },
};

function PersonalvitalsListFilter(props) {
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
                    name="temperature"
                    label={i18n("entities.personalvitals.fields.temperature")}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="weight"
                    label={i18n("entities.personalvitals.fields.weight")}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="height"
                    label={i18n("entities.personalvitals.fields.height")}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="bloodpressure"
                    label={i18n("entities.personalvitals.fields.bloodpressure")}
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

export default PersonalvitalsListFilter;