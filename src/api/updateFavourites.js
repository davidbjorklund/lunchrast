import Axios from 'axios';

import history from '../history.js';

import user from './user.js';

export default function updateFavourites(favouriteToPush){
  if(JSON.parse(localStorage.getItem('user')).favourites){
    var favourites = JSON.parse(localStorage.getItem('user')).favourites;
    var favouritesSplit = favourites.split(':')
    console.log(favouritesSplit, "favouritesSplit")
    var vgy = favouritesSplit[0].split(',')
    var init = favouritesSplit[1].split(',')
    console.log(init, "init")
    //switch(JSON.parse(localStorage.getItem('user')).school){
    switch(JSON.parse(localStorage.getItem('user')).school){
      case "init":
        if(init.includes(favouriteToPush)){
          var index = init.indexOf(favouriteToPush);
          if (index > -1) {init.splice(index, 1);}
        }
        else{
          init.push(favouriteToPush);
        }
        break;
      default:
        if(vgy.includes(favouriteToPush)){
          var index = vgy.indexOf(favouriteToPush);
          if (index > -1) {vgy.splice(index, 1);}
        }
        else{ vgy.push(favouriteToPush);  }
    }
    vgy.join(",")
    init.join(",")
    console.log(init, "init2")
    var newFavourites = [[vgy], [init]]
    var newFavourite = newFavourites.join(":")
    //console.log(vgy, "VGY")
  }else{
    switch(JSON.parse(localStorage.getItem('user')).school){
      case "init":
        var newFavourite = ":"+favouriteToPush;
        break;
      default:
        var newFavourite = favouriteToPush+":";
    }
  }
  //console.log(JSON.parse(localStorage.getItem('user')).favourites, "OLD")
  //console.log(newFavourite)
  const username = JSON.parse(localStorage.getItem('user')).username;
  const jwt = localStorage.getItem('jwt');
  //console.log(newFavourite, favouriteToPush)
  var newJSON = JSON.parse(localStorage.getItem('user'));
  newJSON.favourites = newFavourite;
  localStorage.setItem('user', JSON.stringify(newJSON));
  Axios.post(
    'https://blooming-river-28809.herokuapp.com/api/user/favourites',
    {
      username: username,
      favourites: newFavourite
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
