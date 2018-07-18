import React, { Component } from 'react';
import './../../css/App.css'
import { Button, Card, Elevation, Checkbox, Icon } from "@blueprintjs/core";
import {
    Boundary,
    Breadcrumb,
    Classes,
    H5,
    IMenuItemProps,
    Label,
    Menu,
    MenuItem,
    OverflowList,
    Popover,
    Position,
    RadioGroup,
    Slider,
} from "@blueprintjs/core";
import { Example, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";

class LeftNavBar extends Component {

  render() {
    return (
      <div class="main-menuBox">
      <nav class="main-menu">
            <ul>
                <li>
                    <a href="#">
                        <Icon icon="dashboard"></Icon>
                        <span className="spacelb"></span>
                        <span className="nav-text">
                          Dashboard
                        </span>
                    </a>

                </li>
                <li class="has-subnav">
                    <a href="#">
                        <Icon icon="grouped-bar-chart"></Icon>
                        <span className="spacelb"></span>
                        <span class="nav-text">
                            Graphiclas
                        </span>
                    </a>

                </li>
                <li class="has-subnav">
                    <a href="#">
                       <Icon icon="mobile-phone"></Icon>
                       <span className="spacelb"></span>
                        <span class="nav-text">
                            Devices
                        </span>
                    </a>

                </li>
                <li>
                    <a href="#">
                       <Icon icon="comparison"></Icon>
                       <span className="spacelb"></span>
                        <span class="nav-text">
                            Comparison
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <Icon icon="predictive-analysis"></Icon>
                        <span className="spacelb"></span>
                        <span class="nav-text">
                            Predictive Analysis
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <Icon icon="help"></Icon>
                       <span className="spacelb"></span>
                        <span class="nav-text">
                            Help
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <Icon icon="log-out"></Icon>
                         <span className="spacelb"></span>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default LeftNavBar;
