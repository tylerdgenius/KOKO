import list from 'src/modules/appointment/list/appointmentListReducers';
import form from 'src/modules/appointment/form/appointmentFormReducers';
import view from 'src/modules/appointment/view/appointmentViewReducers';
import destroy from 'src/modules/appointment/destroy/appointmentDestroyReducers';
import importerReducer from 'src/modules/appointment/importer/appointmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
