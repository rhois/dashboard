import { ActionTypes } from '../../store/action-types';

const initialState = {
  users: [],
  isLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_USERS: {
      return Object.assign({}, state, {
        users: action.users,
        isLoaded: action.isLoaded,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

