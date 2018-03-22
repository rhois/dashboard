import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_POSTS: '/posts',
  LIST_USERS: '/users',
};

export const updatePostsList = (data) => ({
  type: ActionTypes.UPDATE_DATA_POSTS,
  posts: data.map(({
    id,
    userId,
    title = '',
    body = '',
  }) => ({
    id,
    userId,
    title,
    body,
  })),
  isLoaded: true,
});

export const fetchPosts = (id) => dispatch => {
  let listUrl = url.LIST_POSTS;
  if(id) {
    listUrl = `${url.LIST_POSTS}?userId=${id}`;
  }
  return fetchData({
    method: 'GET',
    serviceName: listUrl,
    callback: (data) => {
      if (data) {
        dispatch(updatePostsList(data));
      }
    },
  });
};

export const fetchUsers = () => dispatch => fetchData({
  method: 'GET',
  serviceName: url.LIST_USERS,
  callback: (data) => {
    if (data) {
      dispatch(updateUsersList(data));
    }
  },
});

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

export default {
    fetchPosts,
    fetchUsers,
};
