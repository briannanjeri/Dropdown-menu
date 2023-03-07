import React,{ useState } from 'react'

const NavItem = ({item}) => {
    const[showdropDown, setShowDropDown]=useState(false)

   

  return (
    <div className='nav-item'>
    <div>{item}</div>
    </div>
  
  )
}

export default NavItem