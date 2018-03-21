import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';

export class PageAlbumsComponent extends Component {
  componentDidMount() {
    // this.setData();
    setTimeout(() => {
      this.props.updateAlbums();
    }, 500);
  }
  render() {
    const { albums } = this.props;
    return (
      <PageWrapper
        title="Albums"
      >
        <div className="col-lg-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    List of Albums
                </div>
                <div className="panel-body">
                    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                albums.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
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
};
export default PageAlbumsComponent;
