import MedicaltestService from 'src/modules/medicaltest/medicaltestService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDICALTEST_VIEW';

const medicaltestViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicaltestViewActions.FIND_STARTED,
      });

      const record = await MedicaltestService.find(id);

      dispatch({
        type: medicaltestViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicaltestViewActions.FIND_ERROR,
      });

      getHistory().push('/medicaltest');
    }
  },
};

export default medicaltestViewActions;
