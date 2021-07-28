import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/allergies/view/allergiesViewActions';
import selectors from 'src/modules/allergies/view/allergiesViewSelectors';
import AllergiesView from 'src/view/allergies/view/AllergiesView';
import AllergiesViewToolbar from 'src/view/allergies/view/AllergiesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AllergiesPage() {
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
          [i18n('entities.allergies.menu'), '/allergies'],
          [i18n('entities.allergies.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.allergies.view.title')}
        </PageTitle>

        <AllergiesViewToolbar match={match} />
        <AllergiesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AllergiesPage;
