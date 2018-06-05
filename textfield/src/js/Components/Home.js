import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Comienza ya!</Link>
        <img src="http://acidmonkey.net/img/pag_en_construccion.jpg"></img>
      </div>
    );
  }
}

export default Home;
