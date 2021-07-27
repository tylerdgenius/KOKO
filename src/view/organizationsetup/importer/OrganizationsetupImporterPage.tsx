import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organizationsetup/importer/organizationsetupImporterActions';
import fields from 'src/modules/organizationsetup/importer/organizationsetupImporterFields';
import selectors from 'src/modules/organizationsetup/importer/organizationsetupImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganizationsetupImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.organizationsetup.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.organizationsetup.menu'), '/organizationsetup'],
          [i18n('entities.organizationsetup.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.organizationsetup.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default OrganizationsetupImportPage;
