import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/provider/view/providerViewActions';
import selectors from 'src/modules/provider/view/providerViewSelectors';
import ProviderView from 'src/view/provider/view/ProviderView';
import ProviderViewToolbar from 'src/view/provider/view/ProviderViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import ProviderBreadcrumbs from '../shared/ProviderBreadcrumbs';

function ProviderPage() {
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
          [i18n("entities.provider.menu"), "/provider"],
          [i18n("entities.provider.view.title")],
        ]}
      /> */}
      
      <ProviderBreadcrumbs />
      <ContentWrapper>
        <PageTitle>{i18n("entities.provider.view.title")}</PageTitle>

        <ProviderViewToolbar match={match} />
        <ProviderView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ProviderPage;
