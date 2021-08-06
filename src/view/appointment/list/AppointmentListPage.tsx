import React from 'react';
import { i18n } from 'src/i18n';
import AppointmentListFilter from 'src/view/appointment/list/AppointmentListFilter';
import AppointmentListTable from 'src/view/appointment/list/AppointmentListTable';
import AppointmentListToolbar from 'src/view/appointment/list/AppointmentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

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
        <AppointmentListTable />
      </ContentWrapper>
    </>
  );
}

export default AppointmentListPage;
