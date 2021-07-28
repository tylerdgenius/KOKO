import { createSelector } from 'reselect';

const selectRaw = (state) => state.allergies.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const allergiesDestroySelectors = {
  selectLoading,
};

export default allergiesDestroySelectors;
