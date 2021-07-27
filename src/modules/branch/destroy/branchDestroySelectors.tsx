import { createSelector } from 'reselect';

const selectRaw = (state) => state.branch.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const branchDestroySelectors = {
  selectLoading,
};

export default branchDestroySelectors;
