import list from 'src/modules/wallet/list/walletListReducers';
import form from 'src/modules/wallet/form/walletFormReducers';
import view from 'src/modules/wallet/view/walletViewReducers';
import destroy from 'src/modules/wallet/destroy/walletDestroyReducers';
import importerReducer from 'src/modules/wallet/importer/walletImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});



