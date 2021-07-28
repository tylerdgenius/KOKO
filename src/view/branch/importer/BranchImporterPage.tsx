import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/branch/importer/branchImporterActions';
import fields from 'src/modules/branch/importer/branchImporterFields';
import selectors from 'src/modules/branch/importer/branchImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BranchImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.branch.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.branch.menu'), '/branch'],
          [i18n('entities.branch.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.branch.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default BranchImportPage;
