import { createSelector } from 'reselect';

const selectRaw = (state) => state.layout;

const selectMenuVisible = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.menuVisible),
);

const selectLoading = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.loading),
);

const selectLanguage = createSelector(
  [selectRaw],
  (layout) => layout.language,
);

const selectOnline = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.IsOnline),
);

const layoutSelectors = {
  selectRaw,
  selectOnline,
  selectMenuVisible,
  selectLoading,
  selectLanguage,
};

export default layoutSelectors;
