import React, { Component } from 'react';
import './../../css/App.css'
class BarraMenu extends Component {

    openTools() {
    var btn = document.getElementById('btnTools');
    console.log("hola");
    var className = btn.className;

    if (className === "pt-button pt-intent-success buttonadd") {
        className = "pt-button pt-intent-success buttonadd ";
        document.getElementById('migration-form').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer show active";
    }

    else {
        className = "pt-button pt-intent-success buttonadd";
        document.getElementById('migration-form').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer";
    }

    btn.className = className;
}

  render() {
    return (
      <div className="BarraMenu">
        <button id="btnTools" onClick={this.openTools}/*onClick={this.OpenAdd}*/ title="Agregar Dispositivo" type="button" className="pt-button pt-intent-success buttonadd">
          Add
          <span className=" pt-icon-standard pt-icon-add pt-align-right"></span>
        </button>
      </div>
    );
  }
}

export default BarraMenu;
