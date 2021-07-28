import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organizationsetup/view/organizationsetupViewActions';
import selectors from 'src/modules/organizationsetup/view/organizationsetupViewSelectors';
import OrganizationsetupView from 'src/view/organizationsetup/view/OrganizationsetupView';
import OrganizationsetupViewToolbar from 'src/view/organizationsetup/view/OrganizationsetupViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganizationsetupPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]); 

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.organizationsetup.menu'), '/organizationsetup'],
          [i18n('entities.organizationsetup.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.organizationsetup.view.title')}
        </PageTitle>

        <OrganizationsetupViewToolbar match={match} />
        <OrganizationsetupView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OrganizationsetupPage;
