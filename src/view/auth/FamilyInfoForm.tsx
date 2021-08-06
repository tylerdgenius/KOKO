import { Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const schema = yup.object().shape({
  
  Nok: yupFormSchemas.string(
    i18n('entities.profile.fields.nok'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Noknumber: yupFormSchemas.string(
    i18n('entities.profile.fields.noknumber'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Nokemail: yupFormSchemas.string(
    i18n('entities.profile.fields.nokemail'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  Nokaddress: yupFormSchemas.string(
    i18n('entities.profile.fields.nokaddress'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
});

function FamilyInfoForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nok: record.nok,
      noknumber: record.noknumber,
      nokaddress: record.nokaddress,
      nokemail: record.nokemail,
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
  const classes = useStyles();

  return (
    <div>
        <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
       
        <Card elevation={10} style={{
          padding: 20,
          marginTop: 5,
        }}>
        <h2>Family Information</h2>
            <Grid spacing={2} container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Nok"
                    label={i18n('entities.profile.fields.nok')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Noknumber"
                    label={i18n('entities.profile.fields.noknumber')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Nokemail"
                    label={i18n('entities.profile.fields.nokemail')}  
                    required={true}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <InputFormItem
                    name="Nokaddress"
                    label={i18n('entities.profile.fields.nokaddress')}  
                    required={true}
                  />
                </Grid>
          </Grid>
        </Card>
            
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
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
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
    </div>
  );
}

export default FamilyInfoForm;


