import service from 'src/modules/provider/providerService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import { AuthToken } from 'src/modules/auth/authToken';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import selectors from 'src/modules/auth/authSelectors';
import { tenantSubdomain } from '../tenant/tenantSubdomain';
import { OnlineStatus } from '../online/OnlineStatus';

const prefix = 'Provider';

const providerActions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

  AUTH_START: `${prefix}_START`,
  AUTH_SUCCESS: `${prefix}_SUCCESS`,
  AUTH_ERROR: `${prefix}_ERROR`,
  PROVIDER_CREATE_SUCCESS: `${prefix}_CREATED_SUCCESS`,
  PROVIDER_PROFILE_ERROR: `${prefix}_PROFILE_ERROR`,


  doCreateProvider: (data) => async (
    dispatch,
  ) => {
    try {
      dispatch({ type: providerActions.AUTH_START });

      await service.create(
       data
      );
      dispatch({
        type: providerActions.PROVIDER_CREATE_SUCCESS,
            });
            Message.success(i18n('entities.provider.create.success'));
          } catch (error) {
            Errors.handle(error);
      
            dispatch({
              type: providerActions.PROVIDER_PROFILE_ERROR,
            });
          }
  },


};

export default providerActions;
