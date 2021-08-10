import list from 'src/modules/organization/list/organizationListReducers';
import form from 'src/modules/organization/form/organizationFormReducers';
import view from 'src/modules/organization/view/organizationViewReducers';
import destroy from 'src/modules/organization/destroy/organizationDestroyReducers';
import importerReducer from 'src/modules/organization/importer/organizationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
