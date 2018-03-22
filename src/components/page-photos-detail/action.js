import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_PHOTOS: '/photos',
};

export const updatePhotosList = photos => ({
  type: ActionTypes.UPDATE_DATA_DETAIL_PHOTOS,
  photos,
  isLoaded: true,
});

export const fetchPhotos = (id) => dispatch => {
  let listUrl = url.LIST_PHOTOS;
  if(id) {
    listUrl = `${url.LIST_PHOTOS}/${id}`;
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
