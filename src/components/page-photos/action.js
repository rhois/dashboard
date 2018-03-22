import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_PHOTOS: '/photos',
};

export const updatePhotosList = (data) => ({
  type: ActionTypes.UPDATE_DATA_PHOTOS,
  photos: data.map(({
    id,
    title,
    url = '',
    thumbnailUrl = '',
  }) => ({
    id,
    title,
    url,
    thumbnailUrl,
  })),
  isLoaded: true,
});

export const fetchPhotos = (id) => dispatch => {
  let listUrl = url.LIST_PHOTOS;
  if(id) {
    listUrl = `${url.LIST_PHOTOS}?albumId=${id}`;
  }
  return fetchData({
    method: 'GET',
    serviceName: listUrl,
    callback: (data) => {
      if (data) {
        dispatch(updatePhotosList(data));
      }
    },
  });
};

export default {
  fetchPhotos,
};
