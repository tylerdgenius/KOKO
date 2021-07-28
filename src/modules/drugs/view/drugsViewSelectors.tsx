import { createSelector } from 'reselect';

const selectRaw = (state) => state.drugs.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const drugsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default drugsViewSelectors;
