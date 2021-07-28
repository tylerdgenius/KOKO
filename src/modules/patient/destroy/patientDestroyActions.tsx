import listActions from 'src/modules/patient/list/patientListActions';
import PatientService from 'src/modules/patient/patientService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PATIENT_DESTROY';

const patientDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patientDestroyActions.DESTROY_STARTED,
      });

      await PatientService.destroyAll([id]);

      dispatch({
        type: patientDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.patient.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/patient');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patientDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: patientDestroyActions.DESTROY_ALL_STARTED,
      });

      await PatientService.destroyAll(ids);

      dispatch({
        type: patientDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.patient.destroyAll.success'),
      );

      getHistory().push('/patient');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patientDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default patientDestroyActions;



