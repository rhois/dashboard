import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { browserHistory } from 'react-router';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';
import { ActivityIndicator } from '../libraries/activity-indicator';
import { Modal } from '../libraries/modal';
import { styles } from './styles';

export class PagePostsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idUser: 0,
          loading: false,
          modalVisible: false,
          deleteId: 0,
        };
      }
    componentDidMount() {
        const {
            updatePosts,
            updateUsers,
        } = this.props;
        setTimeout(() => {
            updateUsers();
            updatePosts()
                .then(() => {
                    this.setState({ loading: true });
                });
        }, 500);
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    handleDelete(id) {
        const { deletePosts } = this.props;
        deletePosts(id).then((data) => {
          this.props.updatePosts();
        });
        this.setModalVisible(!this.state.modalVisible);
      }
    render() {
        const {
            posts,
            users,
            updatePosts,
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
                title="Posts"
            >
                <Modal
                    visible={this.state.modalVisible}
                    modalStyle={styles.modal}
                    closeStyle={styles.close}
                    close={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <div style={styles.contentModal}>
                        Are you sure want to delete this post?
                    </div>
                    <ul style={styles.buttonModal}>
                        <li style={styles.listModal}>
                            <a
                                role="button"
                                tabIndex="0"
                                style={styles.btnListModal}
                                onClick={() => this.setModalVisible(!this.state.modalVisible)}
                            >
                                CANCEL
                            </a>
                        </li>
                        <li style={styles.listModal}>
                            <a
                                role="button"
                                tabIndex="0"
                                style={styles.btnListModal}
                                onClick={() => this.handleDelete(this.state.deleteId)}
                            >
                                DELETE
                            </a>
                        </li>
                    </ul>
                </Modal>
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            List of Posts
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
                                        updatePosts(usr.value)
                                            .then(() => {
                                                this.setState({ loading: true });
                                            });
                                    }
                                }
                                value={this.state.idUser}
                                placeholder="Select User"
                                className="col-lg-3"
                                id="options"
                            />
                        </div>
                        <p>&nbsp;</p>
                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.body}</td>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                role="button"
                                                                tabIndex="0"
                                                                onClick={() => browserHistory.push(`/posts/${item.id}`)}
                                                            >
                                                                <i className="fa fa-search fa-fw" />
                                                                <span>Detail</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                role="button"
                                                                tabIndex="0"
                                                                onClick={() => browserHistory.push(`/posts/edit/${item.id}`)}
                                                            >
                                                                <i className="fa fa-edit fa-fw" />
                                                                <span>Edit</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                role="button"
                                                                tabIndex="0"
                                                                onClick={() => {
                                                                    this.setState({ deleteId: item.id });
                                                                    this.setModalVisible(!this.state.modalVisible);
                                                                }}
                                                            >
                                                                <i className="fa fa-trash fa-fw" />
                                                                <span>Delete</span>
                                                            </a>
                                                        </li>
                                                    </ul>
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
PagePostsComponent.propTypes = {
    updatePosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    updateUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    deletePosts: PropTypes.func.isRequired,
};
export default PagePostsComponent;
