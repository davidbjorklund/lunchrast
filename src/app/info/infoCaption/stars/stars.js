import React, { PureComponent } from 'react';


const Stars = (props) => {
  var stars = props.stars;
  return (
    <div className={"stars"}>
      <img src={((stars)?(stars>0.74)?require("../../../../images/star.png"):(stars>0.24)?require("../../../../images/star-half.png"):require("../../../../images/star-outline.png"):require("../../../../images/star.png"))} />
      <img src={((stars)?(stars>1.74)?require("../../../../images/star.png"):(stars>1.24)?require("../../../../images/star-half.png"):require("../../../../images/star-outline.png"):require("../../../../images/star.png"))} />
      <img src={((stars)?(stars>2.74)?require("../../../../images/star.png"):(stars>2.24)?require("../../../../images/star-half.png"):require("../../../../images/star-outline.png"):require("../../../../images/star-half.png"))} />
      <img src={((stars)?(stars>3.74)?require("../../../../images/star.png"):(stars>3.24)?require("../../../../images/star-half.png"):require("../../../../images/star-outline.png"):require("../../../../images/star-outline.png"))}/>
      <img src={((stars)?(stars>4.74)?require("../../../../images/star.png"):(stars>4.24)?require("../../../../images/star-half.png"):require("../../../../images/star-outline.png"):require("../../../../images/star-outline.png"))} />
    </div>
  )
}

export default Stars;
