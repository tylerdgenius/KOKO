import React from 'react';
import { i18n } from 'src/i18n';
import OrganizationsetupListFilter from 'src/view/organizationsetup/list/OrganizationsetupListFilter';
import OrganizationsetupListTable from 'src/view/organizationsetup/list/OrganizationsetupListTable';
import OrganizationsetupListToolbar from 'src/view/organizationsetup/list/OrganizationsetupListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganizationsetupListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.organizationsetup.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.organizationsetup.list.title')}
        </PageTitle>

        <OrganizationsetupListToolbar />
        {/* <OrganizationsetupListFilter /> */}
        <OrganizationsetupListTable />
      </ContentWrapper>
    </>
  );
}

export default OrganizationsetupListPage;
