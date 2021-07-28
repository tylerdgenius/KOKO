import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/patient/importer/patientImporterSelectors';
import PatientService from 'src/modules/patient/patientService';
import fields from 'src/modules/patient/importer/patientImporterFields';
import { i18n } from 'src/i18n';

const patientImporterActions = importerActions(
  'PATIENT_IMPORTER',
  selectors,
  PatientService.import,
  fields,
  i18n('entities.patient.importer.fileName'),
);

export default patientImporterActions;


