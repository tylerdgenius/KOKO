import React from 'react';
import { i18n } from 'src/i18n';
import PersonalvitalsListFilter from 'src/view/personalvitals/list/PersonalvitalsListFilter';
import PersonalvitalsListTable from 'src/view/personalvitals/list/PersonalvitalsListTable';
import PersonalvitalsListToolbar from 'src/view/personalvitals/list/PersonalvitalsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PersonalvitalsListPage(props) {
  return (
    <>
        <PersonalvitalsListToolbar />
        {/* <PersonalvitalsListFilter /> */}
        <PersonalvitalsListTable />
    </>
  );
}

export default PersonalvitalsListPage;
