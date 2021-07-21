import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import authSelectors from 'src/modules/auth/authSelectors';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import generalService from 'src/modules/general/generalService';

const prefix = 'GENERAL';

const generalActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  SAVE_STARTED: `${prefix}_SAVE_STARTED`,
  SAVE_SUCCESS: `${prefix}_SAVE_SUCCESS`,
  SAVE_ERROR: `${prefix}_SAVE_ERROR`,

  doNews: () => async (dispatch, getState) => {
    try {
      if (
        !authSelectors.selectSignedIn(getState()) ||
        !AuthCurrentTenant.get()
      ) {
        return;
      }

      dispatch({
        type: generalActions.INIT_STARTED,
      });

      const general = await generalService.getTodaysNews();

      dispatch({
        type: generalActions.INIT_SUCCESS,
        payload: general,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: generalActions.INIT_ERROR,
      });

      getHistory().push('/');
    }
  },

 
};

export default generalActions;
