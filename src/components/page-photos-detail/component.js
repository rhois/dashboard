import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';
import { ActivityIndicator } from '../libraries/activity-indicator';

export class PagePhotosDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          photosId: (props.params.id) ? props.params.id : null,
          loading: false,
        };
    }
    componentDidMount() {
        const {
            updatePhotos,
        } = this.props;
        setTimeout(() => {
            updatePhotos(this.state.photosId)
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
                    title="Detail Photo"
                >
                    <ActivityIndicator />
                </PageWrapper>
            );
        }

        return (
            <PageWrapper
                title="Detail Photo"
            >
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2>{photos.title}</h2>
                            <img src={photos.url} alt={photos.title} title={photos.title} />
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}
PagePhotosDetailComponent.propTypes = {
    updatePhotos: PropTypes.func.isRequired,
    photos: PropTypes.object.isRequired,
};
export default PagePhotosDetailComponent;
