import listActions from 'src/modules/drugs/list/drugsListActions';
import DrugsService from 'src/modules/drugs/drugsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DRUGS_DESTROY';

const drugsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: drugsDestroyActions.DESTROY_STARTED,
      });

      await DrugsService.destroyAll([id]);

      dispatch({
        type: drugsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.drugs.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/drugs');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: drugsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: drugsDestroyActions.DESTROY_ALL_STARTED,
      });

      await DrugsService.destroyAll(ids);

      dispatch({
        type: drugsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.drugs.destroyAll.success'),
      );

      getHistory().push('/drugs');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: drugsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default drugsDestroyActions;
