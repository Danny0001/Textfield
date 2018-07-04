import React, { Component } from 'react';
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import './../../css/App.css'
class BarraMenu extends Component {
/*
  OpenAdd(){
    var btn = document.getElementById('btnTools');
   var className = btn.className;
   var res = '';

   if (className == "plus-button") {
       className = "plus-button open";
       document.getElementById('migration-form').className = "formcontainer show active";
   }

   else {
       className = "plus-button";
       document.getElementById('migration-form').className = "formcontainer";
   }

   btn.className = className;
}
*/

  render() {
    return (
      <div className="BarraMenu">
        <button /*onClick={this.OpenAdd}*/ title="Agregar Dispositivo" type="button" class="pt-button pt-intent-success .buttonadd  ">
          Add
          <span class=" pt-icon-standard pt-icon-add pt-align-right"></span>
        </button>
      </div>
    );
  }
}

export default BarraMenu;
