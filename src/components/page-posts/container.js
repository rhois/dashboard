import { connect } from 'react-redux';
import { PagePostsComponent } from './component';
import {
  fetchPosts,
} from './action';


export const mapStateToProps = state => state.pagePosts;

export const mapDispatchToProps = dispatch => ({
  updatePosts: () => dispatch(fetchPosts()),
});

export const PagePostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePostsComponent);

export default PagePostsContainer;
