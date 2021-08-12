import ExistinghospitalService from 'src/modules/existinghospital/existinghospitalService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXISTINGHOSPITAL_VIEW';

const existinghospitalViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: existinghospitalViewActions.FIND_STARTED,
      });

      const record = await ExistinghospitalService.find(id);

      dispatch({
        type: existinghospitalViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: existinghospitalViewActions.FIND_ERROR,
      });

      getHistory().push('/existinghospital');
    }
  },
};

export default existinghospitalViewActions;
