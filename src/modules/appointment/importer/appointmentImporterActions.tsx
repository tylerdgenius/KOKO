import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/appointment/importer/appointmentImporterSelectors';
import AppointmentService from 'src/modules/appointment/appointmentService';
import fields from 'src/modules/appointment/importer/appointmentImporterFields';
import { i18n } from 'src/i18n';

const appointmentImporterActions = importerActions(
  'APPOINTMENT_IMPORTER',
  selectors,
  AppointmentService.import,
  fields,
  i18n('entities.appointment.importer.fileName'),
);

export default appointmentImporterActions;