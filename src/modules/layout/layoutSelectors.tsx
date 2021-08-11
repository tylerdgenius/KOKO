import { createSelector } from 'reselect';
import { OnlineStatus } from '../online/OnlineStatus';

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


const IsOnline = createSelector(
  [selectRaw],
  (layout) => Boolean(OnlineStatus.get()),
);


const layoutSelectors = {
  selectRaw,
  IsOnline,
  selectMenuVisible,
  selectLoading,
  selectLanguage,
};

export default layoutSelectors;
