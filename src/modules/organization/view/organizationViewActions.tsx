import OrganizationService from 'src/modules/organization/organizationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ORGANIZATION_VIEW';

const organizationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: organizationViewActions.FIND_STARTED,
      });

      const record = await OrganizationService.find(id);

      dispatch({
        type: organizationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: organizationViewActions.FIND_ERROR,
      });

      getHistory().push('/organization');
    }
  },
};

export default organizationViewActions;
