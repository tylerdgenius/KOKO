import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/drugs/importer/drugsImporterSelectors';
import DrugsService from 'src/modules/drugs/drugsService';
import fields from 'src/modules/drugs/importer/drugsImporterFields';
import { i18n } from 'src/i18n';

const drugsImporterActions = importerActions(
  'DRUGS_IMPORTER',
  selectors,
  DrugsService.import,
  fields,
  i18n('entities.drugs.importer.fileName'),
);

export default drugsImporterActions;