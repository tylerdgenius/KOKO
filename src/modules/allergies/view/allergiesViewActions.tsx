import AllergiesService from 'src/modules/allergies/allergiesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ALLERGIES_VIEW';

const allergiesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: allergiesViewActions.FIND_STARTED,
      });

      const record = await AllergiesService.find(id);

      dispatch({
        type: allergiesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: allergiesViewActions.FIND_ERROR,
      });

      getHistory().push('/allergies');
    }
  },
};

export default allergiesViewActions;
