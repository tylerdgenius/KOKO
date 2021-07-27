import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patient/view/patientViewActions';
import selectors from 'src/modules/patient/view/patientViewSelectors';
import PatientView from 'src/view/patient/view/PatientView';
import PatientViewToolbar from 'src/view/patient/view/PatientViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientPage() {
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
          [i18n('entities.patient.menu'), '/patient'],
          [i18n('entities.patient.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patient.view.title')}
        </PageTitle>

        <PatientViewToolbar match={match} />
        <PatientView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PatientPage;



