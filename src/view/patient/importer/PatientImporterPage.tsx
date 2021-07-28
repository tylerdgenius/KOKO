import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patient/importer/patientImporterActions';
import fields from 'src/modules/patient/importer/patientImporterFields';
import selectors from 'src/modules/patient/importer/patientImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.patient.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patient.menu'), '/patient'],
          [i18n('entities.patient.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patient.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PatientImportPage;



