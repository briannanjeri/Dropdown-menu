import "./Navbar.css"
import React,{ useState } from 'react'
import NavItem from './NavItem'
const Navbar = () => {
    const Items=['navitem 1', 'navitem2', 'navitem3']
    const[showdropDown, setShowDropDown]=useState(false)


    function toggleDropDown() {
    
        setShowDropDown(!showdropDown)
    }
  return (
    <div className='navbar'>
    <div className="nav-item" onClick={toggleDropDown}>{Items[0]}</div>

       {Items.slice(1,3).map(( item, idx)=>(
        <NavItem item={item} key={idx} />
        
       ))} 
{showdropDown && (
       <div className="dropdown-menu">

       <div className="dropdown-item">Dropdown item 1</div>
       <div className="dropdown-item">Dropdown item 2</div>
       <div className="dropdown-item">Dropdown item 3</div>

       </div>
       
       )} 
    </div>
  );
}

export default Navbar