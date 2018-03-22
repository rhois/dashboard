import { connect } from 'react-redux';
import { PageAlbumsComponent } from './component';
import {
  fetchAlbums,
  fetchUsers,
} from './action';


export const mapStateToProps = state => state.pageAlbums;

export const mapDispatchToProps = dispatch => ({
  updateAlbums: id => dispatch(fetchAlbums(id)),
  updateUsers: () => dispatch(fetchUsers()),
});

export const PageAlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageAlbumsComponent);

export default PageAlbumsContainer;
