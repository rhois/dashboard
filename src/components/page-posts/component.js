import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';

export class PagePostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myProps: null,
    };
  }
  componentDidMount() {
    // this.setData();
    setTimeout(() => {
      this.props.updatePosts();
    }, 500);
  }
  render() {
    const { posts } = this.props;
    return (
      <PageWrapper
        title="Posts"
      >
        <div className="col-lg-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    List of Posts
                </div>
                <div className="panel-body">
                    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
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
};
export default PagePostsComponent;
