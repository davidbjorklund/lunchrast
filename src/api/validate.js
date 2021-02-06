import Axios from 'axios';

import history from '../history.js';

export default function validate(jwt){
  /*Axios.post(
    'http://localhost:8015/lunchphp/api/protected.php',
    {
      auth: jwt
    }
  ).then( (response) => {
    if(response.status === 200){
      console.log(response)
      return( response )
    }else{
      console.log(response)
      history.push('/login')
      window.location.reload();
    }
  }).catch( (error) => {
    console.log(error)
    history.push('/login')
    window.location.reload();
  })*/
  Axios({
    method: 'get',
    url: 'https://blooming-river-28809.herokuapp.com/api/test/user',
    headers: {
      "x-access-token": jwt
    }
  }).then( (response) => {
    if(response.status === 200){
      console.log(response)
      return( response )
    }else{
      console.log(response)
      history.push('/login')
      window.location.reload();
    }
  }).catch( (error) => {
    console.log(error)
    history.push('/login')
    window.location.reload();
  })
}
