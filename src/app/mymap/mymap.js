import React, { forwardRef, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import customIconRed from '../../icons/CustomIconRed.js';
import customIconBlue from '../../icons/CustomIconBlue.js';
import { withRouter } from 'react-router-dom';
import history from '../../history';
import { useMediaQuery } from 'react-responsive'

import user from '../../api/user.js';
import vgy from '../../api/vgy.js';
import center from '../../api/center.js';
import centerMobile from '../../api/centerMobile.js';
import init from '../../api/init.js';

import Caption from './caption';

import 'leaflet/dist/leaflet.css'
import './style.css';

//var style = "ckbfdpezl40y61ijy9u7w3kdw";
var style = "ckbfimkcg28vi1ik4iro8fp6p";

const MyMap = forwardRef(({ lat, lng, zoom, restaurant, updateRestaurant, updateCurrentRef, userposition }, ref)=>{
  const mapRef = React.useRef();
  var accessToken = process.env.REACT_APP_MAPBOX_KEY;
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1100;
  if (width > breakpoint) {
    var addTo18 = 0.00075;
    var addTo17 = 0.0015;
    var addTo16 = 0.003;
    var addTo15 = 0.006;
  }
  else{
    var addTo18 = 0.0000;
    var addTo17 = 0.0000;
    var addTo16 = 0.0000;
    var addTo15 = 0.0000;
  }
  var popups = [];
  for (var key in vgy) {
    popups.push(
      <Caption thisKey={key} key={key} thisSchool={vgy} restaurant={restaurant} handleZoom={handleZoom} handleSetView={handleSetView} icon={customIconRed} />
    )
  }
  if(userposition.lat && userposition.lng){
    popups.push(
      <Marker key={"userposition"} position={[userposition.lat, userposition.lng]} icon={ customIconBlue } onClick={(e)=>{ handleSetView(e, "userposition"); }}>
        <Popup>
          <span className={"popupContent"} id={"userposition"} onClick={(e)=>{handleZoom("userposition")}}>
            <h3>Din plats</h3><p></p>
          </span>
        </Popup>
      </Marker>
    )
  }
  ref = JSON.parse(JSON.stringify(ref));
  ref.focusFromParent = function(passedRestaurant){
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;
  window.setTimeout(()=>{
    if(passedRestaurant){
        switch(map._zoom){
          case 18:
            map.setView([vgy[passedRestaurant].lat, parseFloat(parseFloat(vgy[passedRestaurant].lng)+addTo18)], 18);
            break;
          default:
            map.setView([vgy[passedRestaurant].lat, parseFloat(parseFloat(vgy[passedRestaurant].lng)+addTo17)], 17);
        }
      }
    }, 50)
  }
  updateCurrentRef(ref);
  setTimeout(()=>{
    console.log(ref)
    updateCurrentRef(ref)
  }, 1000)
  function handleSetView(e, newRestaurant){
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    window.setTimeout(()=>{
      if(newRestaurant==="userposition"){
        switch(map._zoom){
          case 18:
            map.setView([userposition.lat, parseFloat(parseFloat(userposition.lng)+addTo18)], 18);
            break;
          case 17:
            map.setView([userposition.lat, parseFloat(parseFloat(userposition.lng)+addTo17)], 17);
            break;
          case 16:
            map.setView([userposition.lat, parseFloat(parseFloat(userposition.lng)+addTo16)], 16);
            break;
          default:
            map.setView([userposition.lat, parseFloat(parseFloat(userposition.lng)+addTo15)], 15);
        }
      }else{
        if(newRestaurant){
            switch(map._zoom){
              case 18:
                map.setView([vgy[newRestaurant].lat, parseFloat(parseFloat(vgy[newRestaurant].lng)+addTo18)], 18);
                break;
              case 17:
                map.setView([vgy[newRestaurant].lat, parseFloat(parseFloat(vgy[newRestaurant].lng)+addTo17)], 17);
                break;
              case 16:
                map.setView([vgy[newRestaurant].lat, parseFloat(parseFloat(vgy[newRestaurant].lng)+addTo16)], 16);
                break;
              default:
                map.setView([vgy[newRestaurant].lat, parseFloat(parseFloat(vgy[newRestaurant].lng)+addTo15)], 15);
            }
          }
        }
      }, 50)
      //history.push('/app/'+newRestaurant)
    updateRestaurant(newRestaurant);
  }
  function handleZoom(zoomToRestaurant){
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    window.setTimeout(()=>{
      if(zoomToRestaurant==="userposition"){
        map.setView([userposition.lat, parseFloat(parseFloat(userposition.lng)+addTo18)], 18);
      }else{
        if(zoomToRestaurant){
          map.setView([vgy[zoomToRestaurant].lat, parseFloat(parseFloat(vgy[zoomToRestaurant].lng)+addTo18)], 18);
        }
      }
    }, 50)
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])
  return(
    <section id={"content"}>
      <Map ref={mapRef} center={((width > breakpoint)?[lat, lng]:[lat - 0.0075, lng - 0.0075])} zoom={((width > breakpoint)?zoom:13)} id="map" className="mapLight">
      <TileLayer
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/davidbjlund/${style}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`} />
        {popups}
      </Map>
    </section>
  )
})

export default MyMap;
