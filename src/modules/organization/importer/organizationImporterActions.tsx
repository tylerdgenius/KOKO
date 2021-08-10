import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/organization/importer/organizationImporterSelectors';
import OrganizationService from 'src/modules/organization/organizationService';
import fields from 'src/modules/organization/importer/organizationImporterFields';
import { i18n } from 'src/i18n';

const organizationImporterActions = importerActions(
  'ORGANIZATION_IMPORTER',
  selectors,
  OrganizationService.import,
  fields,
  i18n('entities.organization.importer.fileName'),
);

export default organizationImporterActions;