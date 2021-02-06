import React, { useEffect, forwardRef } from 'react';

import { Link } from 'react-router-dom'

import Stars from './stars'
import Meals from './meals'

import user from '../../../api/user.js';

const InfoCaption = forwardRef(({ thisKey, thisSchool, thisRestaurant, updateRestaurant, updateMeals, focusOnMap, scrollBody, scrollBodyMobile }, ref) => {
  /*ref = JSON.parse(JSON.stringify(ref));
  ref.changeRestaurant = function(restaurant){
    thisRestaurant = restaurant;
  }
  var activeRef = React.useRef();*/
  useEffect(()=>{
    //window.addEventListener('storage', getFavourites());
    if(ref.current && thisRestaurant===thisKey){
      setTimeout(()=>{
        if(thisRestaurant){
          scrollBody(ref.current)
        }
      }, 50)
    }
  })
  ref = React.useRef();
  const infocaption = [];
  if(thisKey===thisRestaurant){
    infocaption.push(
      <div ref={ref} className={`caption-big light ${thisKey}`} key={thisKey}>
        <div className={"caption-big-wrap"} onClick={(e) => {updateRestaurant(thisKey); focusOnMap(thisKey);}}>
          <h2>{ thisSchool[thisKey].namn }</h2>
          <Stars stars={thisSchool[thisKey].rating}/>
          <p className={"address"}><img src={require("../../../images/metro-location.png")} alt=""/>{ thisSchool[thisKey].address }</p>
          <h4>Beskrivning:</h4>
          <p className={"description"}>{(thisSchool[thisKey].description)?thisSchool[thisKey].description:"Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. "}</p>
          <h4 className={"meals-h4"}>Måltider:</h4>
          <Meals meals={thisSchool[thisKey].meals} updateMeals={updateMeals}/>
        </div>
      </div>
    )
  }
  /*
  <div className={"heart"} onClick={(e)=>{updateLike(thisKey)}} style={{top: '30px', width: 21.67 * 25 / 20+'px', height: '25px'}}>
    <img src={((mode==1)?((school==="vgy")?((favouritesVgy.includes(thisKey))?require('../../../images/heart-filled.png'):require("../../../images/heart.png")):((favouritesInit.includes(thisKey))?require('../../../images/heart-filled.png'):require("../../../images/heart.png"))):((school==="vgy")?((favouritesVgy.includes(thisKey))?require('../../../images/heart-dark-filled.png'):require("../../../images/heart-dark.png")):((favouritesInit.includes(thisKey))?require('../../../images/heart-dark-filled.png'):require("../../../images/heart-dark.png"))))} alt=""/>
  </div>
  */
  else{
    infocaption.push (
      <div className={"caption-overlay"} style={{position: 'relative', width: '100%'}}>
        <div className={`caption light ${thisKey}`} key={thisKey} onClick={(e) => {updateRestaurant(thisKey); focusOnMap(thisKey)}}>
          <h3>{ thisSchool[thisKey].namn }</h3>
          <p><img src={require("../../../images/metro-location.png")} alt=""/>{ thisSchool[thisKey].address }</p>
          <Stars stars={thisSchool[thisKey].rating}/>
        </div>

      </div>
    )
  }
  /*
  <div className={"heart"} onClick={(e)=>{updateLike(thisKey)}}>
    <img src={((mode==1)?((school==="vgy")?((favouritesVgy.includes(thisKey))?require('../../../images/heart-filled.png'):require("../../../images/heart.png")):((favouritesInit.includes(thisKey))?require('../../../images/heart-filled.png'):require("../../../images/heart.png"))):((school==="vgy")?((favouritesVgy.includes(thisKey))?require('../../../images/heart-dark-filled.png'):require("../../../images/heart-dark.png")):((favouritesInit.includes(thisKey))?require('../../../images/heart-dark-filled.png'):require("../../../images/heart-dark.png"))))} alt=""/>
  </div>
  */
  return(
    <React.Fragment>
    { infocaption[0] }
    </React.Fragment>
  )
})

export default InfoCaption;
