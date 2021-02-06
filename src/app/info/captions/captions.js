import React from 'react';

import InfoCaption from '../infoCaption';

const Captions = ({allItems, captions, loadAllItems}) => {
  const view = (
    <React.Fragment>
      <div className={"captions"}>
        {captions[0]}
        {captions[1]}
        {captions[2]}
        {captions[3]}
        {captions[4]}
        {captions[5]}
        {captions[6]}
        {captions[7]}
        {captions[8]}
        {captions[9]}
      </div>
      <div className={"load"} onClick={()=>{loadAllItems()}}>
        <h4>Ladda in fler <img src={require("../../../images/plus.png")} /></h4>
      </div>
    </React.Fragment>
  )
  const viewAll = (
    <div className={"captions"}>
      {captions}
    </div>
  )
  if(!allItems && captions[9]){
    return (
      {view}
    )
  }
  else{
    return (
      {viewAll}
    )
  }
}

export default Captions;
