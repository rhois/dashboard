import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from '../../store/store';
import { MainLayout } from '../main-layout/component';
import { PageDashboard } from '../page-dashboard/component';
import { PageUsers } from '../page-users';
import { PagePosts } from '../page-posts';
import { PagePostsDetail } from '../page-posts-detail';
import { PageAlbums } from '../page-albums';
import { PagePhotos } from '../page-photos';
import { PagePhotosDetail } from '../page-photos-detail';
import { CreatePosts } from '../page-posts/libraries/create-posts';

const history = syncHistoryWithStore(browserHistory, store);

export const AppRoute = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" onlyActiveOnIndex>
        <IndexRedirect to="/dashboard" />
        <Route component={MainLayout}>
          <Route path="dashboard" component={PageDashboard} />
          <Route path="users" component={PageUsers} />
          <Route path="posts" component={PagePosts} />
          <Route path="posts/:id" component={PagePostsDetail} />
          <Route path="posts/edit/:id" component={CreatePosts} />
          <Route path="albums" component={PageAlbums} />
          <Route path="photos/albums/:id" component={PagePhotos} />
          <Route path="photos/:id" component={PagePhotosDetail} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default AppRoute;
