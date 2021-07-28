import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/organizationsetup/importer/organizationsetupImporterSelectors';
import OrganizationsetupService from 'src/modules/organizationsetup/organizationsetupService';
import fields from 'src/modules/organizationsetup/importer/organizationsetupImporterFields';
import { i18n } from 'src/i18n';

const organizationsetupImporterActions = importerActions(
  'ORGANIZATIONSETUP_IMPORTER',
  selectors,
  OrganizationsetupService.import,
  fields,
  i18n('entities.organizationsetup.importer.fileName'),
);

export default organizationsetupImporterActions;