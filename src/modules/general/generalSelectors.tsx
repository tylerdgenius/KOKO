import { createSelector } from 'reselect';

const selectRaw = (state) => state.general;


const selectLoading = createSelector(
    [selectRaw],
    (raw) => raw.loading,
  );
  
  const selectRows = createSelector(
    [selectRaw],
    (raw) => raw.rows,
  );

const selectGeneral = createSelector(
  [selectRaw],
  (raw) => '', // raw.general,
);

const selectInitLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.initLoading),
);


const generalSelectors = {
  selectLoading,
  selectRows,
  selectInitLoading,
  selectGeneral,
  selectRaw,
};

export default generalSelectors;
