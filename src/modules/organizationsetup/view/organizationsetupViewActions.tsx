import OrganizationsetupService from 'src/modules/organizationsetup/organizationsetupService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ORGANIZATIONSETUP_VIEW';

const organizationsetupViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: organizationsetupViewActions.FIND_STARTED,
      });

      const record = await OrganizationsetupService.find(id);

      dispatch({
        type: organizationsetupViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: organizationsetupViewActions.FIND_ERROR,
      });

      getHistory().push('/organizationsetup');
    }
  },
};

export default organizationsetupViewActions;
