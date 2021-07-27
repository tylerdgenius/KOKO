import list from 'src/modules/drugs/list/drugsListReducers';
import form from 'src/modules/drugs/form/drugsFormReducers';
import view from 'src/modules/drugs/view/drugsViewReducers';
import destroy from 'src/modules/drugs/destroy/drugsDestroyReducers';
import importerReducer from 'src/modules/drugs/importer/drugsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
