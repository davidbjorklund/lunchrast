import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";


class Logo extends PureComponent {
  render () {
    return (
      <div className={'logo-container'}>
        <Link to="/">
          <img src={require("../../images/Icon@2x.png")} alt="LunchDax" />
        </Link>
      </div>
    )
  }
}

export default Logo
