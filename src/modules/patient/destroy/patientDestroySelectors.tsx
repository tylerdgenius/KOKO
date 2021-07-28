import { createSelector } from 'reselect';

const selectRaw = (state) => state.patient.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patientDestroySelectors = {
  selectLoading,
};

export default patientDestroySelectors;



