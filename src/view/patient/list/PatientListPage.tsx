import React from 'react';
import { i18n } from 'src/i18n';
import PatientListFilter from 'src/view/patient/list/PatientListFilter';
import PatientListTable from 'src/view/patient/list/PatientListTable';
import PatientListToolbar from 'src/view/patient/list/PatientListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patient.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patient.list.title')}
        </PageTitle>

        <PatientListToolbar />
        {/* <PatientListFilter /> */}
        <PatientListTable />
      </ContentWrapper>
    </>
  );
}

export default PatientListPage;



