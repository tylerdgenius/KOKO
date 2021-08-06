import AppointmentService from 'src/modules/appointment/appointmentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'APPOINTMENT_FORM';

const appointmentFormActions = {
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
        type: appointmentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AppointmentService.find(id);
      }

      dispatch({
        type: appointmentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: appointmentFormActions.INIT_ERROR,
      });

      getHistory().push('/appointment');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: appointmentFormActions.CREATE_STARTED,
      });

      await AppointmentService.create(values);

      dispatch({
        type: appointmentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.appointment.create.success'),
      );

      getHistory().push('/appointment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: appointmentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: appointmentFormActions.UPDATE_STARTED,
      });

      await AppointmentService.update(id, values);

      dispatch({
        type: appointmentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.appointment.update.success'),
      );

      getHistory().push('/appointment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: appointmentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default appointmentFormActions;
