import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/wallet/view/walletViewActions';
import selectors from 'src/modules/wallet/view/walletViewSelectors';
import WalletView from 'src/view/wallet/view/WalletView';
import WalletViewToolbar from 'src/view/wallet/view/WalletViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function WalletPage() {
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
          [i18n('entities.wallet.menu'), '/wallet'],
          [i18n('entities.wallet.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.wallet.view.title')}
        </PageTitle>

        <WalletViewToolbar match={match} />
        <WalletView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default WalletPage;



