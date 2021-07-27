import React from 'react';
import { i18n } from 'src/i18n';
import DrugsListFilter from 'src/view/drugs/list/DrugsListFilter';
import DrugsListTable from 'src/view/drugs/list/DrugsListTable';
import DrugsListToolbar from 'src/view/drugs/list/DrugsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DrugsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.drugs.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.drugs.list.title')}
        </PageTitle>

        <DrugsListToolbar />
        {/* <DrugsListFilter /> */}
        <DrugsListTable />
      </ContentWrapper>
    </>
  );
}

export default DrugsListPage;
