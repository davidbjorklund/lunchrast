import L from 'leaflet';

const customIconBlue = new L.Icon({
  iconUrl: require('../icons/custom_marker_blue_new.png'),
  iconSize: [25, 25],
  iconAnchor: [12.5, 12.5],
  popupAnchor: [0, -20],
});

export default customIconBlue;
