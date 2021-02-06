import React, { PureComponent } from 'react';


const Meals = (props) => {
  var meals = props.meals;
  var view = [];
  if(meals){
    meals.forEach((item, i) => {
      view.push(
        <div className={"meal"} key={`meal-${i}`}>
          <img src={require(`../../../../images/meals/${item.image}`)} alt={item.name}/>
        </div>
      )
    });
  }
  return (
    <div className={"meals"}>
      {view}
      <div className={"meal"} id={"add"} onClick={()=>{props.updateMeals()}}>
        <img src={require("../../../../images/camera@2x.png")} alt=""/>
        <h4>Lägg Till Måltid</h4>
      </div>
    </div>
  )
}
/*
{meals.map((x, idx) =>
)}
*/

export default Meals;
