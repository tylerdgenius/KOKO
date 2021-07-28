import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/personalvitals/importer/personalvitalsImporterSelectors';
import PersonalvitalsService from 'src/modules/personalvitals/personalvitalsService';
import fields from 'src/modules/personalvitals/importer/personalvitalsImporterFields';
import { i18n } from 'src/i18n';

const personalvitalsImporterActions = importerActions(
  'PERSONALVITALS_IMPORTER',
  selectors,
  PersonalvitalsService.import,
  fields,
  i18n('entities.personalvitals.importer.fileName'),
);

export default personalvitalsImporterActions;