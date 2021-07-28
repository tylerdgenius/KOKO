import { createSelector } from 'reselect';

const selectRaw = (state) => state.personalvitals.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const personalvitalsDestroySelectors = {
  selectLoading,
};

export default personalvitalsDestroySelectors;
