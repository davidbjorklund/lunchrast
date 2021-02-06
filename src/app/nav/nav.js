import React, { PureComponent, useEffect } from 'react';

import './style.css';

import Logo from '../logo';
import NavLinks from '../navlinks';
import Menu from '../menu';
import Open from '../open';

/*class Nav extends PureComponent {
  render () {*/
const Nav = (props)=>{
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1100;
  const [menu, setMenu] = React.useState(false)
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if(width > breakpoint){
      setMenu(false)
    }
  }, [])
  function openMenu(){
    if(menu){
      setMenu(false)
    }else{
      setMenu(true)
    }
  }
  return (
    <nav id={"nav"}>
      <Logo />

    </nav>
  )
}
/*{(width > breakpoint)?<NavLinks currentRoute={props.currentRoute} />:<Menu openMenu={openMenu} isOpen={menu}/>}
{menu && <Open thisRoute={props.currentRoute}/>}*/
//}

export default Nav
