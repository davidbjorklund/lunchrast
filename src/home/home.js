import React, { PureComponent, Fragment } from 'react';


import { Route } from 'react-router-dom';

import './style.css';

import Header from './header';
import Main from './main';
/*
import Login from './login';
import Signup from './signup';
import Forgot from './forgot';
*/
class Home extends PureComponent {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <Fragment>
        <Route exact path="/" render={props => <Fragment><Header /><Main /></Fragment>} />
      </Fragment>
    )
  }
}
/*<Route exact path="/login" render={props => <Fragment><Header /><Login /></Fragment>} />
<Route exact path="/signup" render={props => <Fragment><Header /><Signup /></Fragment>} />
<Route exact path="/forgot" render={props => <Fragment><Header /><Forgot /></Fragment>} />*/

export default Home;
