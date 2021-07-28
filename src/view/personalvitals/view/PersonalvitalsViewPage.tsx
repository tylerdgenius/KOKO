import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/personalvitals/view/personalvitalsViewActions';
import selectors from 'src/modules/personalvitals/view/personalvitalsViewSelectors';
import PersonalvitalsView from 'src/view/personalvitals/view/PersonalvitalsView';
import PersonalvitalsViewToolbar from 'src/view/personalvitals/view/PersonalvitalsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PersonalvitalsPage() {
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
          [i18n('entities.personalvitals.menu'), '/personalvitals'],
          [i18n('entities.personalvitals.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.personalvitals.view.title')}
        </PageTitle>

        <PersonalvitalsViewToolbar match={match} />
        <PersonalvitalsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PersonalvitalsPage;
