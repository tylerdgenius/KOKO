import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/provider/importer/providerImporterSelectors';
import ProviderService from 'src/modules/provider/providerService';
import fields from 'src/modules/provider/importer/providerImporterFields';
import { i18n } from 'src/i18n';

const providerImporterActions = importerActions(
  'PROVIDER_IMPORTER',
  selectors,
  ProviderService.import,
  fields,
  i18n('entities.provider.importer.fileName'),
);

export default providerImporterActions;