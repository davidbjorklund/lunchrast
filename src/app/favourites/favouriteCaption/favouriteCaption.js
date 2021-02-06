import React, { useEffect, forwardRef } from 'react';

import { Link } from 'react-router-dom'

import Stars from './stars'
import Meals from './meals'

import user from '../../../api/user.js';

const FavoruiteCaption = forwardRef(({ thisKey, thisSchool, school, mode, updateMeals, favouritesVgy, favouritesInit }, ref) => {
  const infocaption = [];
  infocaption.push(
    <div className={mode===1 ? `caption-big dark ${thisKey}` : `caption-big light ${thisKey}`} key={thisKey}>
      <div className={"caption-big-wrap"} >
        <h2>{ thisSchool[thisKey].namn }</h2>
        <Stars stars={thisSchool[thisKey].rating}/>
        <p className={"address"}><img src={mode===1 ? require("../../../images/metro-location-dark.png") : require("../../../images/metro-location.png")} alt=""/>{ thisSchool[thisKey].address }</p>
        <h4>Beskrivning:</h4>
        <p className={"description"}>{(thisSchool[thisKey].description)?thisSchool[thisKey].description:"Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. "}</p>
        <h4 className={"meals-h4"}>Måltider:</h4>
        <Meals meals={thisSchool[thisKey].meals} updateMeals={updateMeals}/>
      </div>
      <div className={"heart"} style={{top: '30px', width: 21.67 * 25 / 20+'px', height: '25px'}}>
        <img src={((mode==1)?((school==="vgy")?((favouritesVgy.includes(thisKey))?require('../../../images/heart-filled.png'):require("../../../images/heart.png")):((favouritesInit.includes(thisKey))?require('../../../images/heart-filled.png'):require("../../../images/heart.png"))):((school==="vgy")?((favouritesVgy.includes(thisKey))?require('../../../images/heart-dark-filled.png'):require("../../../images/heart-dark.png")):((favouritesInit.includes(thisKey))?require('../../../images/heart-dark-filled.png'):require("../../../images/heart-dark.png"))))} alt=""/>
      </div>
    </div>
  )
  return(
    <React.Fragment>
    { infocaption[0] }
    </React.Fragment>
  )
})

export default FavoruiteCaption;
