import { createSelector } from 'reselect';

const selectRaw = (state) => state.appointment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const appointmentDestroySelectors = {
  selectLoading,
};

export default appointmentDestroySelectors;
