import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/branch/view/branchViewActions';
import selectors from 'src/modules/branch/view/branchViewSelectors';
import BranchView from 'src/view/branch/view/BranchView';
import BranchViewToolbar from 'src/view/branch/view/BranchViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BranchPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]); 

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.branch.menu'), '/branch'],
          [i18n('entities.branch.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.branch.view.title')}
        </PageTitle>

        <BranchViewToolbar match={match} />
        <BranchView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default BranchPage;
