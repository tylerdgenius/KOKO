import list from 'src/modules/patient/list/patientListReducers';
import form from 'src/modules/patient/form/patientFormReducers';
import view from 'src/modules/patient/view/patientViewReducers';
import destroy from 'src/modules/patient/destroy/patientDestroyReducers';
import importerReducer from 'src/modules/patient/importer/patientImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});



