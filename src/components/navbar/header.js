import React from 'react'
import {NavLink,Link} from 'react-router-dom'

function Header({setMenuState,menuState}) {
  return (
    <header>
    <div className="container">
      <div className="header-inner">
      <Link to={`/`}>
      <img src='../images/logojaddi.png'/>
       </Link>
       <div className='navlarge'>
           <NavLink to={`/about`}>About</NavLink>
           <NavLink to={`/project`}>Project</NavLink>
           <NavLink to={`/contact`}>Contact</NavLink>
        </div> 
        <div onClick={() => setMenuState(!menuState)} className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header