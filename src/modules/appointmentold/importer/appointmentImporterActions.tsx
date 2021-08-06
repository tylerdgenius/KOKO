import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/allergies/importer/allergiesImporterSelectors';
import AllergiesService from 'src/modules/allergies/allergiesService';
import fields from 'src/modules/allergies/importer/allergiesImporterFields';
import { i18n } from 'src/i18n';

const allergiesImporterActions = importerActions(
  'ALLERGIES_IMPORTER',
  selectors,
  AllergiesService.import,
  fields,
  i18n('entities.allergies.importer.fileName'),
);

export default allergiesImporterActions;