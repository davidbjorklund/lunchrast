import Axios from 'axios';

import history from '../history.js';

export default function updateMode(modeToPush){
  const username = JSON.parse(localStorage.getItem('user')).username;
  const jwt = localStorage.getItem('jwt');
  var newJSON = JSON.parse(localStorage.getItem('user'));
  newJSON.mode = modeToPush;
  localStorage.setItem('user', JSON.stringify(newJSON));
  Axios.post(
    'https://blooming-river-28809.herokuapp.com/api/user/mode',
    {
      username: username,
      mode: modeToPush
    },
    {
      headers: {
        "x-access-token": jwt
      }
    }
  ).then( (response) => {
    console.log(response)
  }).catch( (error) => {
    console.log(error)
  })
}
