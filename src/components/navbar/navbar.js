import React,{useEffect,useState} from 'react'
import Menu from './menu'
import Header from './header'

function Navbar() {

    const [menuState, setMenuState] = useState(false)
  return (
    <div className='App'>
        <Header setMenuState={setMenuState}
        menuState={menuState}/>
        <Menu menuState={menuState}
        setMenuState={setMenuState}/>
    </div>
  )
}

export default Navbar