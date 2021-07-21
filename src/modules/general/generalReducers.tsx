import selectors from 'src/modules/general/generalSelectors';
import actions from 'src/modules/general/generalActions';


const initialData = {
    loading: false
}
export default (state = initialData, { type, payload }) => {
    if (type === actions.SAVE_SUCCESS) {
        return {
          ...state,
          errorMessage: null,
        };
      }
}