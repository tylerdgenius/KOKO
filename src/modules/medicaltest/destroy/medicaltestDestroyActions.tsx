import listActions from 'src/modules/medicaltest/list/medicaltestListActions';
import MedicaltestService from 'src/modules/medicaltest/medicaltestService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDICALTEST_DESTROY';

const medicaltestDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicaltestDestroyActions.DESTROY_STARTED,
      });

      await MedicaltestService.destroyAll([id]);

      dispatch({
        type: medicaltestDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.medicaltest.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/medicaltest');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicaltestDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: medicaltestDestroyActions.DESTROY_ALL_STARTED,
      });

      await MedicaltestService.destroyAll(ids);

      dispatch({
        type: medicaltestDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.medicaltest.destroyAll.success'),
      );

      getHistory().push('/medicaltest');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicaltestDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default medicaltestDestroyActions;
