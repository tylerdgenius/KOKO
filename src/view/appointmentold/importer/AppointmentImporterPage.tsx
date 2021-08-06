import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicaltest/importer/medicaltestImporterActions';
import fields from 'src/modules/medicaltest/importer/medicaltestImporterFields';
import selectors from 'src/modules/medicaltest/importer/medicaltestImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicaltestImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicaltest.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicaltest.menu'), '/medicaltest'],
          [i18n('entities.medicaltest.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicaltest.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicaltestImportPage;
