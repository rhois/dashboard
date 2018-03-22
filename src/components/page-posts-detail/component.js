import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';
import { ActivityIndicator } from '../libraries/activity-indicator';

export class PagePostsDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postId: (props.params.id) ? props.params.id : null,
          loading: false,
        };
      }
    componentDidMount() {
        const {
            updatePosts,
            updateComments,
        } = this.props;
        setTimeout(() => {
            updateComments(this.state.postId);
            updatePosts(this.state.postId)
                .then(() => {
                    this.setState({ loading: true });
                });
        }, 500);
    }
    render() {
        const {
            posts,
            comments,
        } = this.props;
        if (this.state.loading === false) {
            return (
                <PageWrapper
                    title="Detail Posts"
                >
                    <ActivityIndicator />
                </PageWrapper>
            );
        }

        return (
            <PageWrapper
                title="Detail Posts"
            >
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2>{posts.title}</h2>
                            <p>{posts.body}</p>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Comments
                        </div>
                        <div className="panel-body">
                            <ul>
                                {
                                    comments.map(item => (
                                        <li>
                                            <span>{item.name} | {item.email}</span>
                                            <p>{item.body}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}
PagePostsDetailComponent.propTypes = {
    updatePosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
    updateComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
};
export default PagePostsDetailComponent;
