import { ActionTypes } from '../../store/action-types';

const initialState = {
  posts: [],
  isLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_POSTS: {
      return Object.assign({}, state, {
        posts: action.posts,
        isLoaded: action.isLoaded,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

