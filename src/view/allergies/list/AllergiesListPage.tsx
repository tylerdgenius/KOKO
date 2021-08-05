import React from 'react';
import { i18n } from 'src/i18n';
import AllergiesListFilter from 'src/view/allergies/list/AllergiesListFilter';
import AllergiesListTable from 'src/view/allergies/list/AllergiesListTable';
import AllergiesListToolbar from 'src/view/allergies/list/AllergiesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AllergiesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.allergies.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.allergies.list.title')}
        </PageTitle>

        <AllergiesListToolbar />        
        <AllergiesListFilter />
        <AllergiesListTable />
      </ContentWrapper>
    </>
  );
}

export default AllergiesListPage;
