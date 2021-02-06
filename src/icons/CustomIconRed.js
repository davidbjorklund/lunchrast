import L from 'leaflet';

const customIconRed = new L.Icon({
  iconUrl: require('../icons/custom_marker_red_new.png'),
  iconSize: [25, 25],
  iconAnchor: [12.5, 12.5],
  popupAnchor: [0, -20],
});

export default customIconRed;
