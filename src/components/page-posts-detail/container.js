import { connect } from 'react-redux';
import { PagePostsDetailComponent } from './component';
import {
  fetchPostsDetail,
  fetchComments,
} from './action';


export const mapStateToProps = state => state.pagePostsDetail;

export const mapDispatchToProps = dispatch => ({
  updatePosts: id => dispatch(fetchPostsDetail(id)),
  updateComments: id => dispatch(fetchComments(id)),
});

export const PagePostsDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePostsDetailComponent);

export default PagePostsDetailContainer;
