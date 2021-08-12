import { createSelector } from 'reselect';

const selectRaw = (state) => state.provider.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const providerDestroySelectors = {
  selectLoading,
};

export default providerDestroySelectors;
