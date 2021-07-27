import listActions from 'src/modules/personalvitals/list/personalvitalsListActions';
import PersonalvitalsService from 'src/modules/personalvitals/personalvitalsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PERSONALVITALS_DESTROY';

const personalvitalsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: personalvitalsDestroyActions.DESTROY_STARTED,
      });

      await PersonalvitalsService.destroyAll([id]);

      dispatch({
        type: personalvitalsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.personalvitals.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/personalvitals');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: personalvitalsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: personalvitalsDestroyActions.DESTROY_ALL_STARTED,
      });

      await PersonalvitalsService.destroyAll(ids);

      dispatch({
        type: personalvitalsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.personalvitals.destroyAll.success'),
      );

      getHistory().push('/personalvitals');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: personalvitalsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default personalvitalsDestroyActions;
