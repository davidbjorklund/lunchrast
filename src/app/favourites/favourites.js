import React, { PureComponent, Fragment } from 'react';
import history from '../../history';
import { TimelineLite, CSSPlugin } from "gsap/all";
import { Route, Link } from 'react-router-dom';

import FavouriteCaption from './favouriteCaption';

import vgy from '../../api/vgy.js';
import init from '../../api/init.js';
import updateFavourites from '../../api/updateFavourites.js';

import './style.css';

//class Favourites extends PureComponent {
  /*constructor(){
    super();
    this.state = {
      schoolName: "",
      school: "",
      mode: 0,
      favouritesVgy: [],
      favouritesInit: []
    }
  }*/
const Favourites = ({ skola, school, mode,  favouritesVgy, favouritesInit, reloadFavourites}) => {
  function updateLike(key){
    console.log(JSON.parse(localStorage.getItem('user')).favourites.includes(key), "change to reverse")
    updateFavourites(key)
    reloadFavourites()
  }
  function updateMeals(){

  }
    var captions = [];
    switch( school){
      case "init":
        for (var i = 0; i <  favouritesInit.length; i++) {
          if( favouritesInit[i]){
            //alert( favouritesInit[i])
            captions.push(
              <FavouriteCaption thisKey={favouritesInit[i]} thisSchool={init} school={ school} mode={ mode} updateLike={updateLike} favouritesVgy={ favouritesVgy} favouritesInit={ favouritesInit} updateMeals={updateMeals}/>
            )
            var filtered = captions.sort((a,b) => init[b.props.thisKey].rating-init[a.props.thisKey].rating)
          }
        }
        break;
      default:
        for (var i = 0; i <  favouritesVgy.length; i++) {
          if(favouritesVgy[i]){
            captions.push(
              <FavouriteCaption thisKey={favouritesVgy[i]} thisSchool={vgy} school={ school} mode={ mode} updateLike={updateLike} favouritesVgy={ favouritesVgy} favouritesInit={ favouritesInit} updateMeals={updateMeals}/>
            )
            //var filtered = captions.sort((a,b) => vgy[b.props.thisKey].rating-vgy[a.props.thisKey].rating)
            var filtered = captions;
            captions.sort((a,b) => console.log(vgy[b.props.thisKey], b, vgy[a.props.thisKey], a))
            //var filtered = captions.sort((a,b) => console.log(b.thisKey, vgy[b.thisKey], b))
          }
        }
    }
    return(
      <section className={mode?"favourites favourites-dark":"favourites"}>
        <div className="current-school">
          <Link to="/app/settings">
            <h4>{ skola } <img src={require("../../images/settings@2x.png")} alt="" /></h4>
          </Link>
        </div>
        <div className={"info"}>
          <h1>Favoriter</h1>
          <div className={"captions"}>
            {filtered?filtered:<p className={(mode===1)?"noneExistsDark":"noneExistsLight"}>Lägg till favoriter från <Link className={"noneExistsLink"} to="/app/">kartan</Link>!</p>}
          </div>
        </div>
      </section>
    )
  //}
  /*componentDidMount(){
    if(this.props){
      this.setState({
        schoolName: this. skola,
        school: this. school,
        mode: this. mode,
        favouritesVgy: this. favouritesVgy,
        favouritesInit: this.favouritesInit
      })
    }
  }*/
}

export default Favourites;
