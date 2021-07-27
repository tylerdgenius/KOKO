import { createSelector } from 'reselect';

const selectRaw = (state) => state.personalvitals.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const personalvitalsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default personalvitalsViewSelectors;
