import React from 'react';
import { i18n } from 'src/i18n';
import ExistinghospitalListFilter from 'src/view/existinghospital/list/ExistinghospitalListFilter';
import ExistinghospitalListTable from 'src/view/existinghospital/list/ExistinghospitalListTable';
import ExistinghospitalListToolbar from 'src/view/existinghospital/list/ExistinghospitalListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExistinghospitalListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.existinghospital.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.existinghospital.list.title')}
        </PageTitle>

        <ExistinghospitalListToolbar />
        <ExistinghospitalListFilter />
        <ExistinghospitalListTable />
      </ContentWrapper>
    </>
  );
}

export default ExistinghospitalListPage;
