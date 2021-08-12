import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/existinghospital/view/existinghospitalViewActions';
import selectors from 'src/modules/existinghospital/view/existinghospitalViewSelectors';
import ExistinghospitalView from 'src/view/existinghospital/view/ExistinghospitalView';
import ExistinghospitalViewToolbar from 'src/view/existinghospital/view/ExistinghospitalViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExistinghospitalPage() {
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
          [i18n('entities.existinghospital.menu'), '/existinghospital'],
          [i18n('entities.existinghospital.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.existinghospital.view.title')}
        </PageTitle>

        <ExistinghospitalViewToolbar match={match} />
        <ExistinghospitalView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ExistinghospitalPage;
