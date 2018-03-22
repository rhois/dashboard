import { ActionTypes } from '../../store/action-types';

const initialState = {
  photos: {},
  isLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_DETAIL_PHOTOS: {
      return Object.assign({}, state, {
        photos: action.photos,
        isLoaded: action.isLoaded,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

