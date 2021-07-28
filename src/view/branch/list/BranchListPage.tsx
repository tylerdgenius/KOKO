import React from 'react';
import { i18n } from 'src/i18n';
import BranchListFilter from 'src/view/branch/list/BranchListFilter';
import BranchListTable from 'src/view/branch/list/BranchListTable';
import BranchListToolbar from 'src/view/branch/list/BranchListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BranchListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.branch.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.branch.list.title')}
        </PageTitle>

        <BranchListToolbar />
        {/* <BranchListFilter /> */}
        <BranchListTable />
      </ContentWrapper>
    </>
  );
}

export default BranchListPage;
