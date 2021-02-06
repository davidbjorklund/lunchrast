import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import './style.css';

/*class Menu extends PureComponent {
  render () {*/
const Open = (props)=>{
  return (
    <div className={"open"}>
      <ul>
        <li>
          <Link to="/app" className={(props.thisRoute==="app")?"link active":"link"}>Home</Link>
        </li>
        <li>
          <Link to="/app/favourites" className={(props.thisRoute==="app/favourites")?"link active":"link"}>Favourites</Link>
        </li>
        <li>
          <Link to="/app/user" className={(props.thisRoute==="app/user")?"link active":"link"}>User</Link>
        </li>
        <li>
          <Link to="/app/settings" className={(props.thisRoute==="app/settings")?"link active":"link"}>Settings</Link>
        </li>
      </ul>
    </div>
  )
}
//}

export default Open
