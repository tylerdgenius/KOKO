import React from 'react';
import { i18n } from 'src/i18n';
import OrganizationListFilter from 'src/view/organization/list/OrganizationListFilter';
import OrganizationListTable from 'src/view/organization/list/OrganizationListTable';
import OrganizationListToolbar from 'src/view/organization/list/OrganizationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganizationListPage(props) {
  return (
    <>
      {/* <Breadcrumb
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.organization.menu")],
        ]}
      /> */}
      {/* <MainBreadcrumbs />
      <OrganizationBreadcrumbs /> */}
      <ContentWrapper>
        <PageTitle>{i18n("entities.organization.list.title")}</PageTitle>

        <OrganizationListToolbar />
        <OrganizationListFilter />
        <OrganizationListTable />
      </ContentWrapper>
    </>
  );
}

export default OrganizationListPage;
