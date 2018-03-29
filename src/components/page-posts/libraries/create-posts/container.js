import { connect } from 'react-redux';
import { CreatePostsComponent } from './component';
import {
    createPost,
    fetchPost,
    updatePost,
} from './action';


export const mapStateToProps = state => state.createPosts;

export const mapDispatchToProps = dispatch => ({
  createPost: params => dispatch(createPost(params)),
  fetchPost: id => dispatch(fetchPost(id)),
  updatePost: (id, params) => dispatch(updatePost(id, params)),
});

export const CreatePostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePostsComponent);

export default CreatePostsContainer;
