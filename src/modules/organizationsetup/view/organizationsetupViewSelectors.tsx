import { createSelector } from 'reselect';

const selectRaw = (state) => state.organizationsetup.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const organizationsetupViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default organizationsetupViewSelectors;
