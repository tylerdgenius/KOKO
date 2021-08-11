import OrganizationService from 'src/modules/organization/organizationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ORGANIZATION_FORM';

const organizationFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: organizationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await OrganizationService.find(id);
      }

      dispatch({
        type: organizationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: organizationFormActions.INIT_ERROR,
      });

      getHistory().push('/organization');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: organizationFormActions.CREATE_STARTED,
      });

      await OrganizationService.create(values);

      dispatch({
        type: organizationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.organization.create.success'),
      );

      getHistory().push('/organization');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: organizationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: organizationFormActions.UPDATE_STARTED,
      });

      await OrganizationService.update(id, values);

      dispatch({
        type: organizationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.organization.update.success'),
      );

      getHistory().push('/organization');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: organizationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default organizationFormActions;
