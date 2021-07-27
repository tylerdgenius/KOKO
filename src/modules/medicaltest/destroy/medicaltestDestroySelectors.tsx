import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicaltest.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicaltestDestroySelectors = {
  selectLoading,
};

export default medicaltestDestroySelectors;
