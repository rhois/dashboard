import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_ALBUMS: '/albums',
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

export const fetchAlbums = () => dispatch => fetchData({
    method: 'GET',
    serviceName: url.LIST_ALBUMS,
    callback: (data) => {
      if (data) {
        dispatch(updateAlbumsList(data));
      }
    },
});
export default {
    fetchAlbums,
};
