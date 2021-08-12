import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/provider/importer/providerImporterActions';
import fields from 'src/modules/provider/importer/providerImporterFields';
import selectors from 'src/modules/provider/importer/providerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProviderImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.provider.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.provider.menu'), '/provider'],
          [i18n('entities.provider.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.provider.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ProviderImportPage;
