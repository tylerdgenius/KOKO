import { createSelector } from 'reselect';

const selectRaw = (state) => state.organizationsetup.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const organizationsetupDestroySelectors = {
  selectLoading,
};

export default organizationsetupDestroySelectors;
