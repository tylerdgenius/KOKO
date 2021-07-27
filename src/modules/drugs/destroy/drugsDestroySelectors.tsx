import { createSelector } from 'reselect';

const selectRaw = (state) => state.drugs.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const drugsDestroySelectors = {
  selectLoading,
};

export default drugsDestroySelectors;
