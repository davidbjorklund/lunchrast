import React, { PureComponent } from 'react';
import Axios from 'axios';

import history from '../../history.js'

import Logo from '../../home/logo';

import './style.css'

class Input extends PureComponent {
  constructor(){
    super();
    this.state = {
      school: "vgy",
    }
  }
  handleSchoolChange(event){
    //alert(event.target.value)
    console.log(event.target.value)
    if(event.target.value=="Värmdö Gymnasium"){
      this.setState({
        school: "vgy",
      })
    }
    else if(event.target.value=="International IT Collage Of Sweden"){
      this.setState({
        school: "init",
      })
    }
  }
  formSubmit(event){
    //alert(this.state.school)
    event.preventDefault();
    if(this.state.school){
      var schoolToPush = this.state.school
      //this.props.changeSchool(this.state.school)
      const username = JSON.parse(localStorage.getItem('user')).username;
      const jwt = localStorage.getItem('jwt');
      var newJSON = JSON.parse(localStorage.getItem('user'));
      newJSON.school = schoolToPush;
      localStorage.setItem('user', JSON.stringify(newJSON));
      //console.log(username, schoolToPush, jwt, "!!!!!")
      Axios.post(
        'https://blooming-river-28809.herokuapp.com/api/user/school',
        {
          username: username,
          school: schoolToPush
        },
        {
          headers: {
            "x-access-token": jwt
          }
        }
      ).then( (response) => {
        console.log(response)
        history.push("/app");
        window.location.reload();
      }).catch( (error) => {
        console.log(error)
      })
    }
  }
  render(){
    return (
      <div className={"input"}>
        <Logo />
        <div className={"block"}>
          <h1>Välj skola:</h1>
          <form className={"form"} onSubmit={this.formSubmit.bind(this)} >
            <div>
              <label htmlFor="school">
                <div className={"downArrow"}>
                  <img src={require("../../images/down-arrow@2x.png")} alt="Välj skola"/>
                </div>
                <select name="school" id="school" onChange={this.handleSchoolChange.bind(this)}>
                  <option value="Värmdö Gymnasium" selected={(this.state.school==="vgy")?true:false}>Värmdö Gymnasium</option>
                  <option value="International IT Collage Of Sweden" selected={(this.state.school==="init")?true:false}>International IT Collage of Sweden</option>
                </select>
              </label>
            </div>
            <div className={"actions"}>
              <input type="submit" value="Spara" id="submit"/>
            </div>
          </form>
          </div>
      </div>
    )
  }
}

export default Input;
