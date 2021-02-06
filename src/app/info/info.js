import React, { useEffect, useState, forwardRef, PureComponent } from 'react';
import { TimelineLite, CSSPlugin } from "gsap/all";
import { Link } from 'react-router-dom';
import history from '../../history.js';

import vgy from '../../api/vgy.js';
import user from '../../api/user.js';
import init from '../../api/init.js';
import updateFavourites from '../../api/updateFavourites.js';

import InfoCaption from './infoCaption';
import Captions from './captions';

import './style.css';

const Info = forwardRef(({ restaurant, updateRestaurant, focusOnMap, allItems, updateItems }, appref)=>{
  var infoRef = React.createRef();
  var loadRef = React.useRef();
  var thisInfoRef = null;
  appref = JSON.parse(JSON.stringify(appref));
  appref.loadRestaurant = function(item){
    restaurant = item;
    infoRef.changeRestaurant(restaurant)
  }
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1100;
  function scrollToThis(a){
    if(width > breakpoint){
      window.scrollTo(0, a.offsetTop)
    }
    else{
      a.scrollIntoViewIfNeeded(true)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  function updateMeals(){
    alert("Du har inte tillräcklig behörighet!")
  }
  var captions = [];
  for (var key in vgy) {
    captions.push(
      <InfoCaption thisKey={key} thisSchool={vgy} updateMeals={updateMeals} thisRestaurant={restaurant} updateRestaurant={updateRestaurant} focusOnMap={focusOnMap} scrollBody={scrollToThis} />
    )
  }
  var filtered = captions.sort((a,b) => vgy[b.props.thisKey].rating-vgy[a.props.thisKey].rating)

  var filteredShouldBeShown0 = null;
  var filteredShouldBeShown1 = null;
  var filteredShouldBeShown2 = null;
  if(restaurant){
    for (var i = 0; i < filtered.length; i++) {
      if(filtered[i].props.thisKey === restaurant){
        if(allItems===0 && i>10){
          filteredShouldBeShown0 = filtered[i];
        }
        else if(allItems===1 && i>20){
          filteredShouldBeShown1 = filtered[i];
        }
        else if(allItems===2 && i>30){
          filteredShouldBeShown2 = filtered[i];
        }
      }
    }
  }//<img src={require("../../images/settings@2x.png")} alt="" />
  return (
    <div id={"info"} className={"light"} ref={div => thisInfoRef = div}>
      <div className="current-school">
        <h4>Värmdö Gymnasium </h4>
      </div>
      <h1 className={"infoH1 light"}>Lunch idag?</h1>
      <h3 className={"infoHeader light"}>Restauranger:</h3>
      <div className={"captions"}>
        {
          (allItems===0&&filtered[10])?
          ([filtered[0],
          filtered[1],
          filtered[2],
          filtered[3],
          filtered[4],
          filtered[5],
          filtered[6],
          filtered[7],
          filteredShouldBeShown0,
          filtered[8],
          filtered[9]]):null
        }
        {
          (allItems===1&&filtered[20])?
          ([filtered[0],
          filtered[1],
          filtered[2],
          filtered[3],
          filtered[4],
          filtered[5],
          filtered[6],
          filtered[7],
          filtered[8],
          filtered[9],
          filtered[10],
          filtered[11],
          filtered[12],
          filtered[13],
          filtered[14],
          filtered[15],
          filtered[16],
          filtered[17],
          filteredShouldBeShown1,
          filtered[18],
          filtered[19]]):null
        }
        {
          (allItems===2&&filtered[30])?
          ([filtered[0],
          filtered[1],
          filtered[2],
          filtered[3],
          filtered[4],
          filtered[5],
          filtered[6],
          filtered[7],
          filtered[8],
          filtered[9],
          filtered[10],
          filtered[11],
          filtered[12],
          filtered[13],
          filtered[14],
          filtered[15],
          filtered[16],
          filtered[17],
          filtered[18],
          filtered[19],
          filtered[20],
          filtered[21],
          filtered[22],
          filtered[23],
          filtered[24],
          filtered[25],
          filtered[26],
          filtered[27],
          filteredShouldBeShown2,
          filtered[28],
          filtered[29]])
          :null
        }
        {
          ((allItems===0&&filtered[10])||(allItems===1&&filtered[20])||(allItems===2&&filtered[30]))?
          null:filtered
        }
        {
          ((allItems===0 && filtered[10])||(allItems===1 && filtered[20])||(allItems===2 && filtered[30]))?
          <div className={"loadwrap"}>
            <div className={"load"} onClick={()=>{updateItems(allItems);updateRestaurant()}}>
              <h4>Ladda in fler <img src={require("../../images/plus.png")} /></h4>
            </div>
          </div>:null
        }
      </div>
    </div>
  )
})


export default Info;
