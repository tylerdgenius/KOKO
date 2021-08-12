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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'src/modules/auth/authSelectors';
import actions from 'src/modules/provider/providerActions';

const schema = yup.object().shape({
  medical_no: yupFormSchemas.string(
    i18n('entities.provider.fields.medical_no'),
    {
      max: 80,
    },
  ),
  practice_area: yupFormSchemas.string(
    i18n('entities.provider.fields.practice_area'),
    {
      max: 175,
    },
  ),
});

function ProviderForm(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectLoadingCreateProvider,
  );

  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      medical_no: record.medical_no,
      practice_area: record.practice_area,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    dispatch(actions.doCreateProvider(values));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="medical_no"
                label={i18n("entities.provider.fields.medical_no")}
                required={true}
                autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="practice_area"
                label={i18n("entities.provider.fields.practice_area")}
                required={true}
                autoFocus
              />
            </Grid>
          </Grid>
          <FormButtons
          
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

export default ProviderForm;
