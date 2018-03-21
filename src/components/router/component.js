import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from '../../store/store';
import { MainLayout } from '../main-layout/component';
import { PageDashboard } from '../page-dashboard/component';
import { PageUsers } from '../page-users';
import { PagePosts } from '../page-posts';
import { PageAlbums } from '../page-albums';

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
          <Route path="albums" component={PageAlbums} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default AppRoute;
