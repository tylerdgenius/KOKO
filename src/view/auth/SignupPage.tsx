import { Button, CircularProgress } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@material-ui/lab/Alert';
import { AlertTitle } from '@material-ui/lab';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      required: true,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      required: true,
    },
  ),
});

function SignupPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  const loading = useSelector(selectors.selectLoading);

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const emailFromInvitation = queryString.parse(
    location.search,
  ).email;

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const [initialValues] = useState({
    email: emailFromInvitation || '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ firstName,lastName,email, password }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(firstName,lastName,email, password),
    );
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/signup.jpg'
        })`,
      }}
    >
      <Content>
        <Logo>
          {logoUrl ? (
            <img
              src={logoUrl}
              width="240px"
              alt={i18n('app.title')}
            />
          ) : (
            <h1>{i18n('app.title')}</h1>
          )}
        </Logo>

        <FormProvider {...form}>
     {   externalErrorMessage ? 
            (
                <Alert severity="error">
                <AlertTitle>
                {externalErrorMessage}
                </AlertTitle>
              </Alert>
            ) : ''
       }
          
          
          
       
          <form onSubmit={form.handleSubmit(onSubmit)}>
                       
            <InputFormItem
              name="firstName"
              label={i18n('user.fields.firstName')}
              autoComplete="text"
              autoFocus
           
            />

            <InputFormItem
              name="lastName"
              label={i18n('user.fields.lastName')}
              autoComplete="text"
              autoFocus
             
            />
             <InputFormItem
              name="email"
              label={i18n('user.fields.email')}
              autoComplete="email"
              autoFocus
            
            />

            <InputFormItem
              name="password"
              label={i18n('user.fields.password')}
              autoComplete="password"
              type="password"
            />

           <InputFormItem
              name="confirmpassword"
              label='Confirm Password'
              autoComplete="password"
              type="password"
            />

            <Button
              style={{ marginTop: '16px' }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
            >
              {i18n('auth.signup')}
              {loading && <CircularProgress size={24} />}
            </Button>

            <OtherActions>
              <MaterialLink
                component={Link}
                to="/auth/signin"
              >
                {i18n('auth.alreadyHaveAnAccount')}
              </MaterialLink>
            </OtherActions>
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
}

export default SignupPage;
