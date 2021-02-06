import React, { PureComponent, useEffect } from 'react';

import { Link } from "react-router-dom";

import './style.css';

/*class Menu extends PureComponent {
  render () {*/
const Menu = (props)=>{
  var open = false;
  useEffect(()=>{
    open = props.isOpen;
  }, [])
  return (
    <div className={"burgermenu"} onClick={()=>{props.openMenu()}}>
      <div className={props.isOpen?"bars1 close1":"bars1"}></div>
      <div className={props.isOpen?"bars2 close2":"bars2"}></div>
      <div className={props.isOpen?"bars3 close3":"bars3"}></div>
    </div>
  )
}
//}

export default Menu
