import React, { Component } from 'react';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';

export class PageDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myProps: null,
    };
  }
  // componentDidMount() {
  //   window.location.reload();
  // }
  render() {
    return (
      <PageWrapper
        title="Dashboard"
      >
        <div>Dashboard</div>
      </PageWrapper>
    );
  }
}
export default PageDashboard;
