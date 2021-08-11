import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organization/form/organizationFormActions';
import selectors from 'src/modules/organization/form/organizationFormSelectors';
import { getHistory } from 'src/modules/store';
import OrganizationForm from 'src/view/organization/form/OrganizationForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrganizationFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.organization.edit.title')
    : i18n('entities.organization.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      {/* <Breadcrumb
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.organization.menu"), "/organization"],
          [title],
        ]}
      /> */}
      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <OrganizationForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push("/organization")}
          />
        )}
      </ContentWrapper>
    </>
  );
}

export default OrganizationFormPage;
