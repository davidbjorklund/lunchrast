import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import './style.css';


/*class NavLinks extends PureComponent {
  render () {*/
  const NavLinks = (props) => {
    return (
      <ul id="nav-links">
        <li>
          <Link to="/app" className="link"> <img src={(props.currentRoute=="app")?require("../../images/home@2x.png"):require('../../images/home-empty.png')} /></Link>
        </li>
        <li>
          <Link to="/app/favourites" className="link" ><img src={(props.currentRoute=="app/favourites")?require("../../images/heart-filled.png"):require("../../images/heart@2x.png")} /></Link>
        </li>
        <li>
          <Link to="/app/user" className="link"><img src={((props.currentRoute=="app/user")?require("../../images/person-filled.png"):require("../../images/person@2x.png"))} /></Link>
        </li>
        <li>
          <Link to="/app/settings" className="link"><img src={((props.currentRoute=="app/settings")?require("../../images/settings-filled.png"):require("../../images/settings@2x.png"))} /></Link>
        </li>
      </ul>
    )
  }
//}

export default NavLinks
