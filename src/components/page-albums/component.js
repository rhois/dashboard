import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { browserHistory } from 'react-router';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';
import { ActivityIndicator } from '../libraries/activity-indicator';

export class PageAlbumsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idUser: 0,
          loading: false,
        };
    }
    componentDidMount() {
        const {
            updateAlbums,
            updateUsers,
        } = this.props;
        setTimeout(() => {
            updateUsers();
            updateAlbums()
                .then(() => {
                    this.setState({ loading: true });
                });
        }, 500);
    }
    render() {
        const {
            albums,
            users,
            updateAlbums,
        } = this.props;
        if (this.state.loading === false) {
            return (
                <PageWrapper
                    title="Posts"
                >
                    <ActivityIndicator />
                </PageWrapper>
            );
        }

        const listUsers = users.map(item => ({
            value: item.id,
            label: item.name,
        }));
        return (
            <PageWrapper
                title="Albums"
            >
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            List of Albums
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <label className="col-lg-12" htmlFor="options">Filter By User</label>
                            <Select
                                name="type-select"
                                clearable={false}
                                searchable={false}
                                multi={false}
                                options={listUsers}
                                onChange={
                                    (usr) => {
                                        this.setState({ idUser: usr.value });
                                        this.setState({ loading: false });
                                        updateAlbums(usr.value)
                                            .then(() => {
                                                this.setState({ loading: true });
                                            });
                                    }
                                }
                                value={this.state.idUser}
                                id="options"
                                placeholder="Select User"
                                className="col-lg-3"
                            />
                        </div>
                        <p>&nbsp;</p>
                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Photos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        albums.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>
                                                    <a
                                                        role="button"
                                                        tabIndex="0"
                                                        onClick={() => browserHistory.push(`/photos/albums/${item.id}`)}
                                                    >
                                                        <i className="fa fa-photo fa-fw" />
                                                        <span>Photos</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}
PageAlbumsComponent.propTypes = {
    updateAlbums: PropTypes.func.isRequired,
    albums: PropTypes.array.isRequired,
    updateUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};
export default PageAlbumsComponent;
