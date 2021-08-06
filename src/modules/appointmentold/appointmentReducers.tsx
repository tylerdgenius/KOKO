import list from 'src/modules/allergies/list/allergiesListReducers';
import form from 'src/modules/allergies/form/allergiesFormReducers';
import view from 'src/modules/allergies/view/allergiesViewReducers';
import destroy from 'src/modules/allergies/destroy/allergiesDestroyReducers';
import importerReducer from 'src/modules/allergies/importer/allergiesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
