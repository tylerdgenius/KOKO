import listActions from 'src/modules/branch/list/branchListActions';
import BranchService from 'src/modules/branch/branchService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BRANCH_DESTROY';

const branchDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: branchDestroyActions.DESTROY_STARTED,
      });

      await BranchService.destroyAll([id]);

      dispatch({
        type: branchDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.branch.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/branch');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: branchDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: branchDestroyActions.DESTROY_ALL_STARTED,
      });

      await BranchService.destroyAll(ids);

      dispatch({
        type: branchDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.branch.destroyAll.success'),
      );

      getHistory().push('/branch');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: branchDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default branchDestroyActions;
