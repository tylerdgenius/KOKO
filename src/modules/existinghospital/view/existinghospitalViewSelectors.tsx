import { createSelector } from 'reselect';

const selectRaw = (state) => state.existinghospital.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const existinghospitalViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default existinghospitalViewSelectors;
