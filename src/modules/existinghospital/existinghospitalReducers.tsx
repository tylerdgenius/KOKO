import list from 'src/modules/existinghospital/list/existinghospitalListReducers';
import form from 'src/modules/existinghospital/form/existinghospitalFormReducers';
import view from 'src/modules/existinghospital/view/existinghospitalViewReducers';
import destroy from 'src/modules/existinghospital/destroy/existinghospitalDestroyReducers';
import importerReducer from 'src/modules/existinghospital/importer/existinghospitalImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
