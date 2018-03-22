import { ActionTypes } from '../../store/action-types';

const initialState = {
  posts: {},
  comments: [],
  isLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_DETAIL_POSTS: {
      return Object.assign({}, state, {
        posts: action.posts,
        isLoaded: action.isLoaded,
      });
    }
    case ActionTypes.UPDATE_DATA_COMMENT_POSTS: {
      return Object.assign({}, state, {
        comments: action.comments,
        isLoaded: action.isLoaded,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

