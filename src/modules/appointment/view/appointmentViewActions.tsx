import AppointmentService from 'src/modules/appointment/appointmentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'APPOINTMENT_VIEW';

const appointmentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: appointmentViewActions.FIND_STARTED,
      });

      const record = await AppointmentService.find(id);

      dispatch({
        type: appointmentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: appointmentViewActions.FIND_ERROR,
      });

      getHistory().push('/appointment');
    }
  },
};

export default appointmentViewActions;
