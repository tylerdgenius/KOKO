import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organization/view/organizationViewActions';
import selectors from 'src/modules/organization/view/organizationViewSelectors';
import OrganizationView from 'src/view/organization/view/OrganizationView';
import OrganizationViewToolbar from 'src/view/organization/view/OrganizationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';


function OrganizationPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]); 

  return (
    <>
      {/* <Breadcrumb
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.organization.menu"), "/organization"],
          [i18n("entities.organization.view.title")],
        ]}
      /> */}
     
      <ContentWrapper>
        <PageTitle>{i18n("entities.organization.view.title")}</PageTitle>

        <OrganizationViewToolbar match={match} />
        <OrganizationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OrganizationPage;
