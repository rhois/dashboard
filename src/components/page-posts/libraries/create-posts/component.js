import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { PageWrapper } from '../../../main-layout/libraries/page-wrapper';

export class CreatePostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id,
      loading: true,
      post: '',
      showAlert: false,
      alertType: 'success',
      messageFlash: '',
      isSubmit: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.state.id) {
      const {
        fetchPost,
      } = this.props;
      fetchPost(this.state.id).then((res) => {
        this.setState({
          post: res,
        });
      });
    }
  }
  onChange(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    // const {
    //   createFilterTags, updateFilterTags,
    // } = this.props;

    // const dataPost = {
    //   tag: this.state.tag,
    // };
    // if (this.state.tag === '') {
    //   this.setState({
    //     isSubmit: true,
    //     showAlert: true,
    //     alertType: 'failed',
    //     messageFlash: 'All fields are required.',
    //   });
    // } else if (this.state.id) {
    //   updateFilterTags(this.state.id, dataPost).then((response) => {
    //     if (response.success && response.data) {
    //       browserHistory.push({
    //         pathname: '/marketplace/product-tags/',
    //         state: { alert: 'success', message: 'Filter tag successfully Updated.' },
    //       });
    //     } else {
    //       const message = (response.data.message.danger) ? response.data.message.danger : 'Filter tag failed updated.';
    //       this.setState({
    //         showAlert: true,
    //         alertType: 'failed',
    //         messageFlash: message,
    //       });
    //     }
    //   });
    // } else {
    //   createFilterTags(dataPost).then((response) => {
    //     if (response.data.message.danger) {
    //       const message = (response.data.message.danger) ? response.data.message.danger : 'Filter tag failed added.';
    //       this.setState({
    //         showAlert: true,
    //         alertType: 'failed',
    //         messageFlash: message,
    //       });
    //     } else if (response.success && response.data) {
    //       browserHistory.push({
    //         pathname: '/marketplace/product-tags/',
    //         state: { alert: 'success', message: 'Filter tag successfully added.' },
    //       });
    //     } else {
    //       browserHistory.push({
    //         pathname: '/marketplace/product-tags/',
    //         state: { alert: 'failed', message: 'Failed to add Filter tag.' },
    //       });
    //     }
    //   });
    // }
  }
  render() {
    let title = 'Create Post';
    let btn = 'Submit';
    if (this.props.params.id) {
      title = 'Edit Post';
      btn = 'Update';
    }
    return (
        <PageWrapper
            title={title}
        >
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {title}
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Title</label>
                                <input name="title" className="form-control" placeholder="title" />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea name="body" className="form-control" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-default">{btn}</button>
                        </form>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
  }
}

CreatePostsComponent.propTypes = {
    createPost: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    params: PropTypes.object,
};

CreatePostsComponent.defaultProps = {
  params: {
    id: '',
  },
};

export default CreatePostsComponent;
