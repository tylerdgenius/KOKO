import listActions from 'src/modules/organizationsetup/list/organizationsetupListActions';
import OrganizationsetupService from 'src/modules/organizationsetup/organizationsetupService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ORGANIZATIONSETUP_DESTROY';

const organizationsetupDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: organizationsetupDestroyActions.DESTROY_STARTED,
      });

      await OrganizationsetupService.destroyAll([id]);

      dispatch({
        type: organizationsetupDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.organizationsetup.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/organizationsetup');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: organizationsetupDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: organizationsetupDestroyActions.DESTROY_ALL_STARTED,
      });

      await OrganizationsetupService.destroyAll(ids);

      dispatch({
        type: organizationsetupDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.organizationsetup.destroyAll.success'),
      );

      getHistory().push('/organizationsetup');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: organizationsetupDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default organizationsetupDestroyActions;
