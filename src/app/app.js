import React, { PureComponent, Fragment } from 'react';
import history from '../history';
import { TimelineLite, CSSPlugin } from "gsap/all";
import { Route, BrowserRouter as Router } from 'react-router-dom';

import login from '../api/login.js';
import validate from '../api/validate.js';
import updateMode from '../api/updateMode.js';
import updateSchool from '../api/updateSchool.js';

import user from '../api/user.js';
import vgy from '../api/vgy.js';
import center from '../api/center.js';
import init from '../api/init.js';

import './style.css';

import Input from './input';

import Nav from './nav';
import Info from './info';
import MyMap from './mymap';

class App extends PureComponent {
  constructor(){
    super();
    this.myMapRef = React.createRef();
    this.myInfoRef = React.createRef();
    this.state = {
      lat: center["vgy"].lat,
      lng: center["vgy"].lng,
      zoom: 14,
      school: "vgy",
      schoolName: "Värmdö Gymnasium",
      restaurant: null,
      allItems: 0,
      userposition: {
        lat: null,
        lng: null
      }
    }
  }
  //history: this.props.history,
  updateRestaurant(item){
    this.setState({
      restaurant: item,
    })
    //this.myInfoRef.loadRestaurant(item)
  }
  changeMode(mode){
    updateMode(mode);
    this.setState({
      mode: mode
    })
  }
  changeSchool(school){
    updateSchool(school);
    this.setState({
      school: school,
      lat: center[school].lat,
      lng: center[school].lng,
    })
  }
  focusOnMap(restaurant){
    this.myMapRef.focusFromParent(restaurant)
  }
  updateCurrentRef(currentRef){
    this.myMapRef = currentRef;
  }
  updateItems(item){
    this.setState({
      allItems: item + 1
    })
  }
  pageChange(previousRoute, nextRoute) {
    console.log(previousRoute, nextRoute)
  }
  findUserPosition(){
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        this.setUserPosition(position)
      });
      setTimeout(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
          this.setUserPosition(position)
        });
      }, 45000)
    } else {
      console.log("Not Available");
    }
  }
  setUserPosition(position){
    this.setState({
      userposition: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }
  render(){
    //console.log(browserHistory)
    /*if(!JSON.parse(localStorage.getItem('user')).school){
      return (
        <Input changeSchool={this.changeSchool.bind(this)}/>
      )
    }*/
    //else{
    return(
      <Router history={history} onChange={this.pageChange}>
        <Route exact path="/app" render={props =>
          <Fragment>
            <Nav currentRoute={"app"}/>
            <Info ref={this.myInfoRef} restaurant={this.state.restaurant} updateRestaurant={this.updateRestaurant.bind(this)} focusOnMap={this.focusOnMap.bind(this)} allItems={this.state.allItems} updateItems={this.updateItems.bind(this)} />
            <MyMap ref={this.myMapRef} lat={this.state.lat} lng={this.state.lng} zoom={user.zoom} newFocus={this.toRestaurant} restaurant={this.state.restaurant} updateRestaurant={this.updateRestaurant.bind(this)} updateCurrentRef={this.updateCurrentRef.bind(this)} userposition={this.state.userposition} />
          </Fragment>
        }/>
      </Router>
    )
  //}
  }
  /*<Route path="/app/favourites" render={props =>
    <Fragment>
    <div className={"app/favourites"}/>
    <Nav currentRoute={"app/favourites"} />
    <Favourites skola={this.state.schoolName} school={this.state.school} mode={this.state.mode} favouritesVgy={this.state.favouritesVgy} favouritesInit={this.state.favouritesInit} reloadFavourites={this.reloadFavourites.bind(this)} />
    </Fragment>
  }/>
  <Route path="/app/user" render={props =>
    <Fragment>
    <Nav currentRoute={"app/user"} />
    <User />
    </Fragment>
  }/>
  <Route path="/app/settings" render={props =>
    <Fragment>
    <Nav currentRoute={"app/settings"} />
    <Settings changeMode={this.changeMode.bind(this)} changeSchool={this.changeSchool.bind(this)}/>
    </Fragment>
  }/>*/
  componentDidMount(){
    /*validate(localStorage.getItem('jwt'));
    if(JSON.parse(localStorage.getItem('user')).school){
      this.setState({
        school: JSON.parse(localStorage.getItem('user')).school,
        lat: center[JSON.parse(localStorage.getItem('user')).school].lat,
        lng: center[JSON.parse(localStorage.getItem('user')).school].lng,
      })
    }
    this.setState({
      mode: JSON.parse(localStorage.getItem('user')).mode,
      favouritesVgy: JSON.parse(localStorage.getItem('user')).favourites.split(':')[0].split(','),
      favouritesInit: JSON.parse(localStorage.getItem('user')).favourites.split(':')[1].split(',')
    })*/
    if(JSON.parse(localStorage.getItem('user')).school){
      this.findUserPosition();
    }
    //console.log(document.fonts.status)
  }
}

export default App;
