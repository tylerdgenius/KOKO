import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/existinghospital/importer/existinghospitalImporterSelectors';
import ExistinghospitalService from 'src/modules/existinghospital/existinghospitalService';
import fields from 'src/modules/existinghospital/importer/existinghospitalImporterFields';
import { i18n } from 'src/i18n';

const existinghospitalImporterActions = importerActions(
  'EXISTINGHOSPITAL_IMPORTER',
  selectors,
  ExistinghospitalService.import,
  fields,
  i18n('entities.existinghospital.importer.fileName'),
);

export default existinghospitalImporterActions;