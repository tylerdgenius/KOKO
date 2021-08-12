import React from 'react';
import { i18n } from 'src/i18n';
import ProviderListFilter from 'src/view/provider/list/ProviderListFilter';
import ProviderListTable from 'src/view/provider/list/ProviderListTable';
import ProviderListToolbar from 'src/view/provider/list/ProviderListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import ProviderBreadcrumbs from '../shared/ProviderBreadcrumbs';

function ProviderListPage(props) {
  return (
    <>
      {/* <Breadcrumb
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.provider.menu")],
        ]}
      /> */}
      <ProviderBreadcrumbs />
      <ContentWrapper>
        <PageTitle>{i18n("entities.provider.list.title")}</PageTitle>

        <ProviderListToolbar />
        <ProviderListFilter />
        <ProviderListTable />
      </ContentWrapper>
    </>
  );
}

export default ProviderListPage;
