import React, { useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styled from 'styled-components';
import 'mapbox-gl/dist/mapbox-gl.css';

import './map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
console.log(mapboxgl.accessToken);

const MapContainer = styled.div`    
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
`;
/*
const Marker = styled.div`
    background-image: '../assets/icons/custom_marker_red.png';
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    cursor: pointer;
`;
*/

const Marker = ({ onClick, children, place }) => {
    const _onClick = () => {
      onClick(place.description);
    };
  
    return (
      <button onClick={_onClick} className="marker">
        {children}
      </button>
    );
  };

const Map = ({markers}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(18.09);
    const [lat, setLat] = useState(59.306);
    const [zoom, setZoom] = useState(13);
    const [selected, setSelected] = useState(null);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/davidbjlund/ckbfdpezl40y61ijy9u7w3kdw',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        Object.values(markers).forEach((place, i)=>{
            const ref = React.createRef();
            ref.current = document.createElement('div');
            ref.current.addEventListener("click",()=>{
                zoomIn(place.lng,place.lat);
                ref.current.style.background = "#0000FF";
                setTimeout(()=>{
                    map.current.on("click",()=>{
                        ref.current.style.background = "#FF0000";
                    })
                },100);
            })
            new mapboxgl.Marker(ref.current).setLngLat([place.lng,place.lat]).addTo(map.current);
        })
    });
    const zoomIn = (newlng,newlat) => {
        //map.current.setZoom(16);
        //map.current.setCenter([newlng,newlat]);
        //console.log(newlng,newlat,"new");
        map.current.flyTo({
            speed: 0.8,
            center: [newlng,newlat],
            zoom: 16,
            maxDuration: 1000,
        });
        //zoom: zoom
    }
    return (
        <div>
            <MapContainer ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map;