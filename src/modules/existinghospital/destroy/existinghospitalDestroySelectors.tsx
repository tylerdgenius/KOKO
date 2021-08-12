import { createSelector } from 'reselect';

const selectRaw = (state) => state.existinghospital.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const existinghospitalDestroySelectors = {
  selectLoading,
};

export default existinghospitalDestroySelectors;
