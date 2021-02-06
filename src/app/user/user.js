import React, { PureComponent, Fragment } from 'react';
import history from '../../history';
import { TimelineLite, CSSPlugin } from "gsap/all";
import { Route } from 'react-router-dom';

import user from '../../api/user.js';

import './style.css';

class User extends PureComponent {
  constructor(){
    super();
    this.state = {
      name: "",
      username: "",
      school: user.school,
      schoolName: "",
      mode: 0,
    }
  }
  render(){
    if(this.state.school==="vgy"){
      this.setState({
        schoolName: "Värmdö Gymnasium"
      })
    }
    else if(this.state.school==="init"){
      this.setState({
        schoolName: "International IT Collage Of Sweden"
      })
    }
    //onClick={this.handleModeChange.bind(this)}
    return(
      <Fragment>
        <section className={(this.state.mode==1)?"user settings dark":"user settings"}>
          <div className={"block"}>
            <h1>{this.state.name}</h1>
            <h3>"{this.state.username}"</h3>
            <img src={require("../../images/standard-user.png")} alt="Konto"/>
            <p>Standard Konto</p>
          </div>
        </section>
      </Fragment>
    )
  }
  componentDidMount(){
    if(JSON.parse(localStorage.getItem('user'))){
      console.log(JSON.parse(localStorage.getItem('user')))
      if(JSON.parse(localStorage.getItem('user')).school){
        this.setState({
          school: JSON.parse(localStorage.getItem('user')).school,
        })
      }
      this.setState({
        email: JSON.parse(localStorage.getItem('user')).email,
        mode: JSON.parse(localStorage.getItem('user')).mode,
        name: JSON.parse(localStorage.getItem('user')).name,
        username: JSON.parse(localStorage.getItem('user')).username,
      })
    }
  }
}

export default User;
