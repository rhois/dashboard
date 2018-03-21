import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from '../navlink/component';

export class Navigation extends Component {
  static handleClick({ self, collapse }) {
    self.setState({ collapse });
  }

  static handleClickNested({ self, collapseNested }) {
    self.setState({ collapseNested });
  }

  constructor(props) {
    super(props);
    this.state = {
      collapse: null,
      collapseNested: null,
      loginStatus: null,
    };
  }

  render() {
    return(
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                      <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
          </li>
          <li>
            <NavLink className="nav-overview" to="/overview">
            <i className="fa fa-dashboard fa-fw" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
              <a><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
              <ul className="nav nav-second-level">
                  <li>
                      <a href="flot.html">Flot Charts</a>
                  </li>
                  <li>
                      <a href="morris.html">Morris.js Charts</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="tables.html"><i className="fa fa-table fa-fw"></i> Tables</a>
          </li>
          <li>
              <a href="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</a>
          </li>
          <li>
              <a><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
              <ul className="nav nav-second-level">
                  <li>
                      <a href="panels-wells.html">Panels and Wells</a>
                  </li>
                  <li>
                      <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                      <a href="notifications.html">Notifications</a>
                  </li>
                  <li>
                      <a href="typography.html">Typography</a>
                  </li>
                  <li>
                      <a href="icons.html"> Icons</a>
                  </li>
                  <li>
                      <a href="grid.html">Grid</a>
                  </li>
              </ul>
          </li>
          <li>
              <a><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
              <ul className="nav nav-second-level">
                  <li>
                      <a>Second Level Item</a>
                  </li>
                  <li>
                      <a>Second Level Item</a>
                  </li>
                  <li>
                      <a>Third Level <span className="fa arrow"></span></a>
                      <ul className="nav nav-third-level">
                          <li>
                              <a>Third Level Item</a>
                          </li>
                          <li>
                              <a>Third Level Item</a>
                          </li>
                          <li>
                              <a>Third Level Item</a>
                          </li>
                          <li>
                              <a>Third Level Item</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li>
              <a><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
              <ul className="nav nav-second-level">
                  <li>
                      <a href="blank.html">Blank Page</a>
                  </li>
                  <li>
                      <a href="login.html">Login Page</a>
                  </li>
              </ul>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  myProps: PropTypes.object,
};

Navigation.defaultProps = {
  myProps: {},
};

export default Navigation;
