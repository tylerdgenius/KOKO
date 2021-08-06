import React from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import AppointmentListTable from './AppointmentListTable';
import AppointmentListToolbar from './AppointmentListToolbar';
import AppointmentsList from './AppointmentsList';

function AppointmentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.appointment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.appointment.list.title')}
        </PageTitle>

        <AppointmentListToolbar />
        {/* <AppointmentListFilter /> */}
        {/* <AppointmentListTable /> */}
        <AppointmentsList />
      </ContentWrapper>
    </>
  );
}

export default AppointmentListPage;
