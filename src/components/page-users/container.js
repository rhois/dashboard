import { connect } from 'react-redux';
import { PageUsersComponent } from './component';
import {
    fetchUsers,
} from './action';


export const mapStateToProps = state => state.pageUsers;

export const mapDispatchToProps = dispatch => ({
  updateUsers: () => dispatch(fetchUsers()),
});

export const PageUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageUsersComponent);

export default PageUsersContainer;
