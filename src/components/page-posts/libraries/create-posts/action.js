import { sprintf } from 'sprintf-js';
import { fetchData } from '../../../../helpers/fetch';

export const url = {
  POSTS: '/posts',
};

export const createPost = params => () => fetchData({
  serviceName: url.POSTS,
  method: 'POST',
  params,
  callback: () => {},
});

export const fetchPost = id => () => {
    let listUrl = url.POSTS;
    if(id) {
        listUrl = `${url.POSTS}/${id}`;
    }
    return fetchData({
        method: 'GET',
        serviceName: listUrl,
        callback: () => {},
    });
};

export const updatePost = (id, params) => () => {
    let listUrl = url.POSTS;
    if(id) {
        listUrl = `${url.POSTS}/${id}`;
    }
    return fetchData({
        method: 'PUT',
        params,
        serviceName: listUrl,
        callback: () => {},
    });
};

export default {
  createPost,
  fetchPost,
  updatePost,
};
