import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/personalvitals/importer/personalvitalsImporterActions';
import fields from 'src/modules/personalvitals/importer/personalvitalsImporterFields';
import selectors from 'src/modules/personalvitals/importer/personalvitalsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PersonalvitalsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.personalvitals.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.personalvitals.menu'), '/personalvitals'],
          [i18n('entities.personalvitals.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.personalvitals.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PersonalvitalsImportPage;
