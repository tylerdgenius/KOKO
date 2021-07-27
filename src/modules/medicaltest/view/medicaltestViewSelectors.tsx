import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicaltest.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const medicaltestViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default medicaltestViewSelectors;
