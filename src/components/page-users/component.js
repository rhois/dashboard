import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';

export class PageUsersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myProps: null,
    };
  }
  componentDidMount() {
    // this.setData();
    setTimeout(() => {
      this.props.updateUsers();
    }, 500);
  }
  renderListUsers() {

  }
  render() {
    const { users } = this.props;
    return (
      <PageWrapper
        title="Users"
      >
        <div className="col-lg-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    List of Users
                </div>
                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(item => (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.website}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </PageWrapper>
    );
  }
}
PageUsersComponent.propTypes = {
    updateUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};
export default PageUsersComponent;
