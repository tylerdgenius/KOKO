import listActions from 'src/modules/provider/list/providerListActions';
import ProviderService from 'src/modules/provider/providerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROVIDER_DESTROY';

const providerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: providerDestroyActions.DESTROY_STARTED,
      });

      await ProviderService.destroyAll([id]);

      dispatch({
        type: providerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.provider.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/provider');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: providerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: providerDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProviderService.destroyAll(ids);

      dispatch({
        type: providerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.provider.destroyAll.success'),
      );

      getHistory().push('/provider');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: providerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default providerDestroyActions;
