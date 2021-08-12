import list from 'src/modules/provider/list/providerListReducers';
import form from 'src/modules/provider/form/providerFormReducers';
import view from 'src/modules/provider/view/providerViewReducers';
import destroy from 'src/modules/provider/destroy/providerDestroyReducers';
import importerReducer from 'src/modules/provider/importer/providerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
