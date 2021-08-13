import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import ProviderPermissions from 'src/modules/provider/providerPermissions';


const selectRaw = (state) => state.providers;

console.log(selectRaw);

const selectCurrentProvider = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectPermissionToRead = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      ProviderPermissions.values.providerRead,
    ),
);

const selectPermissionToEdit = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      ProviderPermissions.values.providerEdit,
    ),
);

const selectPermissionToCreate = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      ProviderPermissions.values.providerCreate,
    ),
);

const selectPermissionToImport = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      ProviderPermissions.values.providerImport,
    ),
);

const selectPermissionToDestroy = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      ProviderPermissions.values.providerDestroy,
    ),
);


const providerSelectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
  selectCurrentProvider,
};

export default providerSelectors;
