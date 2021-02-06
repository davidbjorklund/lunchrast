import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import './style.css';

const Caption = ({ thisKey, thisSchool, restaurant, handleZoom, handleSetView, icon })=>{
  function captionRef(marker){
    if(marker && marker.leafletElement && thisKey === restaurant){
      window.setTimeout(()=>{
        marker.leafletElement.openPopup()
      }, 10)
    }
  }
  /*<Link to={"/app/"+thisKey}>
  </Link>*/
  return(
    <Marker ref={captionRef} key={thisKey} position={[thisSchool[thisKey].lat, thisSchool[thisKey].lng]} icon={ icon } onClick={(e)=>{ handleSetView(e, thisKey); }}>
      <Popup>
        <span className={"popupContent"} id={thisKey} onClick={(e)=>{handleZoom(thisKey)}}>
          <h3>{thisSchool[thisKey].namn}</h3><p>{thisSchool[thisKey].address}</p>
        </span>
      </Popup>
    </Marker>
  )
}

export default Caption;
