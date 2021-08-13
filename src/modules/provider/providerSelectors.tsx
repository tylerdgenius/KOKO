import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import AuthCurrentProvider from './authCurrentProvider';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import ProviderPermissions from 'src/modules/provider/providerPermissions';
const selectRaw = (state) => state.providers;


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
const selectCurrentProvider = createSelector(
  [selectRaw],
  (raw) => raw.rows,
//   [
//       authSelectors.selectCurrentUser,
//   ],
//  // The idea of this method is to refresh
//   // where is using if the current tenant changes
//   (currentProvider) => {
//     return AuthCurrentProvider.getProviderInfo();
//   },
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
