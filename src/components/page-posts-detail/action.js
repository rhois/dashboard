import { fetchData } from '../../helpers/fetch';
import { ActionTypes } from '../../store/action-types';

export const url = {
  LIST_POSTS: '/posts',
};

export const updatePostsComments = (data) => ({
  type: ActionTypes.UPDATE_DATA_COMMENT_POSTS,
  comments: data.map(({
    id,
    postId,
    name = '',
    email = '',
    body = '',
  }) => ({
    id,
    postId,
    name,
    email,
    body,
  })),
  isLoaded: true,
});

export const fetchComments = (id) => dispatch => fetchData({
  method: 'GET',
  serviceName: `${url.LIST_POSTS}/${id}/comments`,
  callback: (data) => {
    if (data) {
      dispatch(updatePostsComments(data));
    }
  },
});

export const fetchPostsDetail = (id) => dispatch => fetchData({
  method: 'GET',
  serviceName: `${url.LIST_POSTS}/${id}`,
  callback: (data) => {
    if (data) {
      dispatch(updateDetailPost(data));
    }
  },
});

export const updateDetailPost = (posts) => ({
  type: ActionTypes.UPDATE_DATA_DETAIL_POSTS,
  posts,
  isLoaded: true,
});

export default {
  fetchPostsDetail,
  fetchComments,
};
