import Axios from 'axios';

import history from '../history.js';

import login from './login.js';

export default function signup(name, username, email, password){
  //'http://localhost:8080/api/auth/signup',
  Axios.post(
    'https://blooming-river-28809.herokuapp.com/api/auth/signup',
    {
      name: name,
      username: username,
      email: email,
      password: password,
      roles: ['user']
    }
  ).then( (response) => {
    console.log(response)
    setTimeout(()=>{
      login(username, password)
    }, 100)
  }).catch( (error) => {
    console.log(error)
  })
}
