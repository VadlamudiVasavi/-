import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Gc from './Gc'
import './Nav.css'
const Nav = () => {
    let obj=useContext(Gc)
  return (

    
    <nav>
        <Link to="/admin/add">AddRes</Link>
        <Link to="/admin/disp">DispRes</Link>
        <Link to="/admin/logout">Logout</Link>
        <h2>{obj.data.name}</h2>


    </nav>
  )
}

export default Nav