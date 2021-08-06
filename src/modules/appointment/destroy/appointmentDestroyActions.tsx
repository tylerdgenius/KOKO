import listActions from 'src/modules/appointment/list/appointmentListActions';
import AppointmentService from 'src/modules/appointment/appointmentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'APPOINTMENT_DESTROY';

const appointmentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: appointmentDestroyActions.DESTROY_STARTED,
      });

      await AppointmentService.destroyAll([id]);

      dispatch({
        type: appointmentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.appointment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/appointment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: appointmentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: appointmentDestroyActions.DESTROY_ALL_STARTED,
      });

      await AppointmentService.destroyAll(ids);

      dispatch({
        type: appointmentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.appointment.destroyAll.success'),
      );

      getHistory().push('/appointment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: appointmentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default appointmentDestroyActions;
