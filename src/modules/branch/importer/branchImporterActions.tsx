import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/branch/importer/branchImporterSelectors';
import BranchService from 'src/modules/branch/branchService';
import fields from 'src/modules/branch/importer/branchImporterFields';
import { i18n } from 'src/i18n';

const branchImporterActions = importerActions(
  'BRANCH_IMPORTER',
  selectors,
  BranchService.import,
  fields,
  i18n('entities.branch.importer.fileName'),
);

export default branchImporterActions;