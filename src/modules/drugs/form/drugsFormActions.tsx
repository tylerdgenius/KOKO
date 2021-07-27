import DrugsService from 'src/modules/drugs/drugsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DRUGS_FORM';

const drugsFormActions = {
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
        type: drugsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DrugsService.find(id);
      }

      dispatch({
        type: drugsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: drugsFormActions.INIT_ERROR,
      });

      getHistory().push('/drugs');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: drugsFormActions.CREATE_STARTED,
      });

      await DrugsService.create(values);

      dispatch({
        type: drugsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.drugs.create.success'),
      );

      getHistory().push('/drugs');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: drugsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: drugsFormActions.UPDATE_STARTED,
      });

      await DrugsService.update(id, values);

      dispatch({
        type: drugsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.drugs.update.success'),
      );

      getHistory().push('/drugs');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: drugsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default drugsFormActions;
