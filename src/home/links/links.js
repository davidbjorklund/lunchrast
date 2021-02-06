import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import './style.css';

function NavLinks(){
  //<Link to="/login" className={"link"}>Logga In</Link>
  return (
    <ul id="links">
      <Link to="/app" className={"link link-bg"}>Använd Lunchrast</Link>
    </ul>
  )
}

export default NavLinks
