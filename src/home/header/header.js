import React, { PureComponent, useEffect } from 'react';

import './style.css';

import Logo from '../logo';
import Links from '../links';
import Menu from '../menu';
import Open from '../open';
/*class Header extends PureComponent {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){*/
const Header = (props)=>{
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if(width > breakpoint){
      setMenu(false)
    }/*else{
      setMenu(true)
    }*/
  }, [])
  const [menu, setMenu] = React.useState(false)
  function openMenu(){
    if(menu){
      setMenu(false)
    }else{
      setMenu(true)
    }
  }
  return(
    <React.Fragment>
    <header id={"header"}>
      <div className={"innerheader"}>
        <Logo />
        {(width > breakpoint)?<Links />:<Menu openMenu={openMenu}/>}
      </div>
      {menu && <Open />}
    </header>
    </React.Fragment>
  )
}
//}

export default Header;
