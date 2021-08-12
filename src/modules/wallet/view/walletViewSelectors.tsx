import { createSelector } from 'reselect';

const selectRaw = (state) => state.wallet.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) =>   raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
 false , // Boolean(raw.loading),
);

const walletViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default walletViewSelectors;



