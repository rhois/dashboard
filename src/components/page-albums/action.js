import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_ALBUMS: '/albums',
  LIST_USERS: '/users',
};

export const updateAlbumsList = (data) => ({
  type: ActionTypes.UPDATE_DATA_ALBUMS,
  albums: data.map(({
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

export const fetchAlbums = (id) => dispatch => {
  let listUrl = url.LIST_ALBUMS;
  if(id) {
    listUrl = `${url.LIST_ALBUMS}?userId=${id}`;
  }
  return fetchData({
    method: 'GET',
    serviceName: listUrl,
    callback: (data) => {
      if (data) {
        dispatch(updateAlbumsList(data));
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
    fetchAlbums,
    fetchUsers,
};
