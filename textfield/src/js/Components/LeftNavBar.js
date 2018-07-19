import React, { Component } from 'react';
import axios from 'axios';
import './../../css/App.css'
import { Icon } from "@blueprintjs/core";

class LeftNavBar extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      redirect:false,
      logged:false,
    };
    this.function_logout = this.function_logout.bind(this);
  }
  componentDidMount() {
  if (document.cookie) {
    this.setState({ logged:true })
  }
  }
  function_logout(){
    axios({
        method: "POST",
        url: "http://localhost:8001/api/user/logout",
      })
    .then(async response => {
      this.setState({
        logged:false,redirect:true
      });
      console.log("sesion cerrada correctamente")
    })
    .catch((err) => {
        console.log("error al cerrar sesion")
      })
  }

  render() {
    return (
      <div className="main-menuBox">
      <nav className="main-menu">
            <ul>
                <li className="btn-2">
                    <a href="http://www.google.com">
                        <Icon icon="dashboard"></Icon>
                        <span className="spacelb"></span>
                        <span className="nav-text">
                          Dashboard
                        </span>
                    </a>

                </li>
                <li className="btn-2">
                    <a href="http://www.google.com">
                        <Icon icon="grouped-bar-chart"></Icon>
                        <span className="spacelb"></span>
                        <span className="nav-text">
                            Graphicals
                        </span>
                    </a>

                </li>
                <li className="btn-2">
                    <a href="http://www.google.com">
                       <Icon icon="mobile-phone"></Icon>
                       <span className="spacelb"></span>
                        <span className="nav-text">
                            Devices
                        </span>
                    </a>

                </li>
                <li className="btn-2">
                    <a href="http://www.google.com">
                       <Icon icon="comparison"></Icon>
                       <span className="spacelb"></span>
                        <span className="nav-text">
                            Comparison
                        </span>
                    </a>
                </li>
                <li className="btn-2">
                   <a href="http://www.google.com">
                        <Icon icon="predictive-analysis"></Icon>
                        <span className="spacelb"></span>
                        <span className="nav-text">
                            Predictions
                        </span>
                    </a>
                </li>
                <li className="btn-2">
                   <a href="http://www.google.com">
                       <Icon icon="help"></Icon>
                       <span className="spacelb"></span>
                        <span className="nav-text">
                            Help
                        </span>
                    </a>
                </li>
            </ul>

            <ul className="logout">
                <li className="btn-2">
                   <a onClick={this.function_logout}>
                         <Icon icon="log-out"></Icon>
                         <span className="spacelb"></span>
                        <span className="nav-text">
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
