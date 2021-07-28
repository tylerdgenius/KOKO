import { createSelector } from 'reselect';

const selectRaw = (state) => state.branch.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const branchViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default branchViewSelectors;
