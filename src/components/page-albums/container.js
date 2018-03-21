import { connect } from 'react-redux';
import { PageAlbumsComponent } from './component';
import {
  fetchAlbums,
} from './action';


export const mapStateToProps = state => state.pageAlbums;

export const mapDispatchToProps = dispatch => ({
  updateAlbums: () => dispatch(fetchAlbums()),
});

export const PageAlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageAlbumsComponent);

export default PageAlbumsContainer;
