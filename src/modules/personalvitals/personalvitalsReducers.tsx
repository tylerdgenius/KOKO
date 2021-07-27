import list from 'src/modules/personalvitals/list/personalvitalsListReducers';
import form from 'src/modules/personalvitals/form/personalvitalsFormReducers';
import view from 'src/modules/personalvitals/view/personalvitalsViewReducers';
import destroy from 'src/modules/personalvitals/destroy/personalvitalsDestroyReducers';
import importerReducer from 'src/modules/personalvitals/importer/personalvitalsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
