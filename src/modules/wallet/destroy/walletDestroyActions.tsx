import listActions from 'src/modules/wallet/list/walletListActions';
import WalletService from 'src/modules/wallet/walletService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'WALLET_DESTROY';

const walletDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: walletDestroyActions.DESTROY_STARTED,
      });

      await WalletService.destroyAll([id]);

      dispatch({
        type: walletDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.wallet.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/wallet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: walletDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: walletDestroyActions.DESTROY_ALL_STARTED,
      });

      await WalletService.destroyAll(ids);

      dispatch({
        type: walletDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.wallet.destroyAll.success'),
      );

      getHistory().push('/wallet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: walletDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default walletDestroyActions;



