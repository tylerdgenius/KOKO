import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/allergies/importer/allergiesImporterActions';
import fields from 'src/modules/allergies/importer/allergiesImporterFields';
import selectors from 'src/modules/allergies/importer/allergiesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AllergiesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.allergies.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.allergies.menu'), '/allergies'],
          [i18n('entities.allergies.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.allergies.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AllergiesImportPage;
