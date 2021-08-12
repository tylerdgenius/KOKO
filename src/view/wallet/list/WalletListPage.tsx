import React from 'react';
import { i18n } from 'src/i18n';
import WalletListTable from 'src/view/wallet/list/WalletListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import WalletListTranscationDisplay from 'src/view/wallet/list/WalletListTranscationDisplay';

function WalletListPage(props) {
  return (
  
    <> 
      <ContentWrapper>
        <PageTitle>
          Wallet Transaction Listing
          {//i18n('entities.wallet.list.transact')
          }
        </PageTitle>       
     
        <WalletListTranscationDisplay />
        <WalletListTable />
      </ContentWrapper>
    </>
  );
}

export default WalletListPage;



