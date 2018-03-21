import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_POSTS: '/posts',
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

export const fetchPosts = () => dispatch => fetchData({
    method: 'GET',
    serviceName: url.LIST_POSTS,
    callback: (data) => {
      if (data) {
        dispatch(updatePostsList(data));
      }
    },
});
export default {
    fetchPosts,
};
