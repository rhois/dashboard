import { connect } from 'react-redux';
import { PagePostsComponent } from './component';
import {
  fetchPosts,
  fetchUsers,
} from './action';


export const mapStateToProps = state => state.pagePosts;

export const mapDispatchToProps = dispatch => ({
  updatePosts: id => dispatch(fetchPosts(id)),
  updateUsers: () => dispatch(fetchUsers()),
});

export const PagePostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePostsComponent);

export default PagePostsContainer;
