import { createSelector } from 'reselect';

const selectRaw = (state) => state.wallet.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const walletDestroySelectors = {
  selectLoading,
};

export default walletDestroySelectors;



