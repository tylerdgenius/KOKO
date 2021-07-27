import list from 'src/modules/medicaltest/list/medicaltestListReducers';
import form from 'src/modules/medicaltest/form/medicaltestFormReducers';
import view from 'src/modules/medicaltest/view/medicaltestViewReducers';
import destroy from 'src/modules/medicaltest/destroy/medicaltestDestroyReducers';
import importerReducer from 'src/modules/medicaltest/importer/medicaltestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
