import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import pageUsers from '../components/page-users/reducer';
import pagePosts from '../components/page-posts/reducer';
import pageAlbums from '../components/page-albums/reducer';

const reducer = combineReducers({
  pageUsers,
  pagePosts,
  pageAlbums,
  routing: routerReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //eslint-disable-line
  applyMiddleware(thunk),
);

export default store;
