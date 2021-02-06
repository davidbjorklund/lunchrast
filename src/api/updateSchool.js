import Axios from 'axios';

import history from '../history.js';

export default function updateSchool(schoolToPush){
  const username = JSON.parse(localStorage.getItem('user')).username;
  const jwt = localStorage.getItem('jwt');
  var newJSON = JSON.parse(localStorage.getItem('user'));
  newJSON.school = schoolToPush;
  localStorage.setItem('user', JSON.stringify(newJSON));
  Axios.post(
    'https://blooming-river-28809.herokuapp.com/api/user/school',
    {
      username: username,
      school: schoolToPush
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
