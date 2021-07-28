import list from 'src/modules/organizationsetup/list/organizationsetupListReducers';
import form from 'src/modules/organizationsetup/form/organizationsetupFormReducers';
import view from 'src/modules/organizationsetup/view/organizationsetupViewReducers';
import destroy from 'src/modules/organizationsetup/destroy/organizationsetupDestroyReducers';
import importerReducer from 'src/modules/organizationsetup/importer/organizationsetupImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
