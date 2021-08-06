import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/appointment/view/appointmentViewActions';
import selectors from 'src/modules/appointment/view/appointmentViewSelectors';
import AppointmentView from 'src/view/appointment/view/AppointmentView';
import AppointmentViewToolbar from 'src/view/appointment/view/AppointmentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AppointmentPage() {
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
          [i18n('entities.appointment.menu'), '/appointment'],
          [i18n('entities.appointment.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.appointment.view.title')}
        </PageTitle>

        <AppointmentViewToolbar match={match} />
        <AppointmentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AppointmentPage;
