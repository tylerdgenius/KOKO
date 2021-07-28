import list from 'src/modules/branch/list/branchListReducers';
import form from 'src/modules/branch/form/branchFormReducers';
import view from 'src/modules/branch/view/branchViewReducers';
import destroy from 'src/modules/branch/destroy/branchDestroyReducers';
import importerReducer from 'src/modules/branch/importer/branchImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
