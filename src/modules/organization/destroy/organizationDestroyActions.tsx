import listActions from 'src/modules/organization/list/organizationListActions';
import OrganizationService from 'src/modules/organization/organizationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ORGANIZATION_DESTROY';

const organizationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: organizationDestroyActions.DESTROY_STARTED,
      });

      await OrganizationService.destroyAll([id]);

      dispatch({
        type: organizationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.organization.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/organization');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: organizationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: organizationDestroyActions.DESTROY_ALL_STARTED,
      });

      await OrganizationService.destroyAll(ids);

      dispatch({
        type: organizationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.organization.destroyAll.success'),
      );

      getHistory().push('/organization');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: organizationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default organizationDestroyActions;
