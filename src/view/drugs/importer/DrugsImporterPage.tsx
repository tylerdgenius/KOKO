import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/drugs/importer/drugsImporterActions';
import fields from 'src/modules/drugs/importer/drugsImporterFields';
import selectors from 'src/modules/drugs/importer/drugsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DrugsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.drugs.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.drugs.menu'), '/drugs'],
          [i18n('entities.drugs.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.drugs.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DrugsImportPage;
