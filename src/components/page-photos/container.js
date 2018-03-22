import { connect } from 'react-redux';
import { PagePhotosComponent } from './component';
import {
  fetchPhotos,
} from './action';


export const mapStateToProps = state => state.pagePhotos;

export const mapDispatchToProps = dispatch => ({
  updatePhotos: id => dispatch(fetchPhotos(id)),
});

export const PagePhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePhotosComponent);

export default PagePhotosContainer;
