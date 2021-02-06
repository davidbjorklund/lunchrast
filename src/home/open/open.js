import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import './style.css';

/*class Menu extends PureComponent {
  render () {*/
const Open = (props)=>{
  return (
    <div className={"openmobile"}>
      <ul>
        <li>
          <Link to="/login" className={"link"}>Logga In</Link>
        </li>
        <li>
          <Link to="/signup" className={"link link-bg"}>Skapa ett konto</Link>
        </li>
      </ul>
    </div>
  )
}
//}

export default Open
