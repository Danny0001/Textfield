import React, { Component } from 'react';
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import './../../css/App.css'
class BarraMenu extends Component {

  render() {
    return (
      <div className="BarraMenu">
        <button title="Agregar Dispositivo" type="button" class="pt-button pt-intent-success">
          Add
          <span class="pt-icon-standard pt-icon-add pt-align-right"></span>
        </button>
      </div>
    );
  }
}

export default BarraMenu;
