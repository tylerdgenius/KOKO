import DrugsService from 'src/modules/drugs/drugsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DRUGS_VIEW';

const drugsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: drugsViewActions.FIND_STARTED,
      });

      const record = await DrugsService.find(id);

      dispatch({
        type: drugsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: drugsViewActions.FIND_ERROR,
      });

      getHistory().push('/drugs');
    }
  },
};

export default drugsViewActions;
