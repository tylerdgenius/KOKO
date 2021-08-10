import React from 'react';
import { i18n } from 'src/i18n';
import MedicaltestListFilter from 'src/view/medicaltest/list/MedicaltestListFilter';
import MedicaltestListTable from 'src/view/medicaltest/list/MedicaltestListTable';
import MedicaltestListToolbar from 'src/view/medicaltest/list/MedicaltestListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicaltestListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicaltest.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicaltest.list.title')}
        </PageTitle>

        <MedicaltestListToolbar />
        <MedicaltestListFilter />
        <MedicaltestListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicaltestListPage;
