import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/wallet/importer/walletImporterSelectors';
import WalletService from 'src/modules/wallet/walletService';
import fields from 'src/modules/wallet/importer/walletImporterFields';
import { i18n } from 'src/i18n';

const walletImporterActions = importerActions(
  'WALLET_IMPORTER',
  selectors,
  WalletService.import,
  fields,
  i18n('entities.wallet.importer.fileName'),
);

export default walletImporterActions;


