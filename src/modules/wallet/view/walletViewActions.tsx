import WalletService from 'src/modules/wallet/walletService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'WALLET_VIEW';

const walletViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: walletViewActions.FIND_STARTED,
      });

      const record = await WalletService.find(id);

      dispatch({
        type: walletViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: walletViewActions.FIND_ERROR,
      });

      getHistory().push('/wallet');
    }
  },
};

export default walletViewActions;



