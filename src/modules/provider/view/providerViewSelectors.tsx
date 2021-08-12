import { createSelector } from 'reselect';

const selectRaw = (state) => state.provider.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const providerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default providerViewSelectors;
