import { connect } from 'react-redux';
import { PagePhotosDetailComponent } from './component';
import {
  fetchPhotos,
} from './action';


export const mapStateToProps = state => state.pagePhotosDetail;

export const mapDispatchToProps = dispatch => ({
  updatePhotos: id => dispatch(fetchPhotos(id)),
});

export const PagePhotosDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePhotosDetailComponent);

export default PagePhotosDetailContainer;
