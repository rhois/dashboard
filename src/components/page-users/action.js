import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_USERS: '/users',
};

export const updateUsersList = (data) => ({
  type: ActionTypes.UPDATE_DATA_USERS,
  users: data.map(({
    id,
    name = '',
    username = '',
    email = '',
    phone = '',
    website = '',
  }) => ({
    id,
    name,
    username,
    email,
    phone,
    website,
  })),
  isLoaded: true,
});

export const fetchUsers = () => dispatch => fetchData({
    method: 'GET',
    serviceName: url.LIST_USERS,
    callback: (data) => {
      if (data) {
        dispatch(updateUsersList(data));
      }
    },
});
export default {
    fetchUsers,
};
