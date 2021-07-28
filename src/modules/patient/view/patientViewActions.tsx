import PatientService from 'src/modules/patient/patientService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PATIENT_VIEW';

const patientViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patientViewActions.FIND_STARTED,
      });

      const record = await PatientService.find(id);

      dispatch({
        type: patientViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientViewActions.FIND_ERROR,
      });

      getHistory().push('/patient');
    }
  },
};

export default patientViewActions;



