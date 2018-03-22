import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';
import { ActivityIndicator } from '../libraries/activity-indicator';

export class PagePhotosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          albumId: (props.params.id) ? props.params.id : null,
          loading: false,
        };
    }
    componentDidMount() {
        const {
            updatePhotos,
        } = this.props;
        setTimeout(() => {
            updatePhotos(this.state.albumId)
                .then(() => {
                    this.setState({ loading: true });
                });
        }, 500);
    }
    render() {
        const {
            photos,
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

        return (
            <PageWrapper
                title="Photos"
            >
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            List of Photos
                        </div>
                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Photos</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        photos.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>
                                                    <img src={item.thumbnailUrl} alt={item.title} title={item.title} />
                                                </td>
                                                <td>
                                                    <a
                                                        role="button"
                                                        tabIndex="0"
                                                        onClick={() => browserHistory.push(`/photos/${item.id}`)}
                                                    >
                                                        <i className="fa fa-search fa-fw" />
                                                        <span>Detail</span>
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
PagePhotosComponent.propTypes = {
    updatePhotos: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
};
export default PagePhotosComponent;
