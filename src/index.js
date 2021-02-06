import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import history from './history';

import './index.css';

import Home from './home';
import App from './app';


const routing = (
  <Router history={history}>
    <Route exact path="/" component={Home} />
    <Route exact path="/app" component={App}/>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
