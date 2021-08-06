import AllergiesService from 'src/modules/allergies/allergiesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ALLERGIES_FORM';

const allergiesFormActions = {
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
        type: allergiesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AllergiesService.find(id);
      }

      dispatch({
        type: allergiesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: allergiesFormActions.INIT_ERROR,
      });

      getHistory().push('/allergies');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: allergiesFormActions.CREATE_STARTED,
      });

      await AllergiesService.create(values);

      dispatch({
        type: allergiesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.allergies.create.success'),
      );

      getHistory().push('/allergies');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: allergiesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: allergiesFormActions.UPDATE_STARTED,
      });

      await AllergiesService.update(id, values);

      dispatch({
        type: allergiesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.allergies.update.success'),
      );

      getHistory().push('/allergies');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: allergiesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default allergiesFormActions;
