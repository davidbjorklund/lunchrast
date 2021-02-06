import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import './style.css';

/*class Menu extends PureComponent {
  render () {*/
const Menu = (props)=>{
  return (
    <React.Fragment>
    <div className={"burgermenu"} onClick={()=>{props.openMenu()}}>
      <div className={"bars1"}></div>
      <div className={"bars2"}></div>
      <div className={"bars3"}></div>
    </div>
    </React.Fragment>
  )
}
//}

export default Menu
