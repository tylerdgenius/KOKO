import { createSelector } from 'reselect';

const selectRaw = (state) => state.allergies.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const allergiesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default allergiesViewSelectors;
