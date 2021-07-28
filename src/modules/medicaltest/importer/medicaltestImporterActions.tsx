import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicaltest/importer/medicaltestImporterSelectors';
import MedicaltestService from 'src/modules/medicaltest/medicaltestService';
import fields from 'src/modules/medicaltest/importer/medicaltestImporterFields';
import { i18n } from 'src/i18n';

const medicaltestImporterActions = importerActions(
  'MEDICALTEST_IMPORTER',
  selectors,
  MedicaltestService.import,
  fields,
  i18n('entities.medicaltest.importer.fileName'),
);

export default medicaltestImporterActions;