import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/drugs/view/drugsViewActions';
import selectors from 'src/modules/drugs/view/drugsViewSelectors';
import DrugsView from 'src/view/drugs/view/DrugsView';
import DrugsViewToolbar from 'src/view/drugs/view/DrugsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DrugsPage() {
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
          [i18n('entities.drugs.menu'), '/drugs'],
          [i18n('entities.drugs.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.drugs.view.title')}
        </PageTitle>

        <DrugsViewToolbar match={match} />
        <DrugsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DrugsPage;
