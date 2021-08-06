import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicaltest/view/medicaltestViewActions';
import selectors from 'src/modules/medicaltest/view/medicaltestViewSelectors';
import MedicaltestView from 'src/view/medicaltest/view/MedicaltestView';
import MedicaltestViewToolbar from 'src/view/medicaltest/view/MedicaltestViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicaltestPage() {
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
          [i18n('entities.medicaltest.menu'), '/medicaltest'],
          [i18n('entities.medicaltest.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicaltest.view.title')}
        </PageTitle>

        <MedicaltestViewToolbar match={match} />
        <MedicaltestView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MedicaltestPage;
