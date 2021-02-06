import Axios from 'axios';

import history from '../history.js';

export default function login(username, password){
  //'http://localhost:8080/api/auth/signin',
  Axios.post(
    'https://blooming-river-28809.herokuapp.com/api/auth/signin',
    {
      username: username,
      password: password
    }
  ).then( (response) => {
    console.log( response )
    localStorage.setItem('jwt', response.data.accessToken)
    localStorage.setItem('user', JSON.stringify(response.data))
    setTimeout(()=>{
      history.push('/app')
      window.location.reload();
    }, 50)
  }).catch( (error) => {
    console.log(error)
    //console.log(error.join(" ").includes("401"))
    console.dir(error)
    alert(error.response.data.message)
    return(error.response)
  })
}
