import React from 'react'
import { NavLink } from 'react-router-dom'
const Mylink = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'> About </NavLink>
      <NavLink to='/contact'>Contact us</NavLink>
    </div>
  )
}

export default Mylink
