import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import { Link } from 'react-router-dom';
import odoplogo from '../../assets/Odoplogo.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={odoplogo} alt="" className='nav-logo' />
      <div className="nav-link">
        {localStorage.getItem('auth-token')
          ? <button className='logout-button' onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/loginseller' style={{textDecoration:"none"}}><a href="#" className='login-button'>Login</a></Link>}
      </div>
    </div>
  )
}

export default Navbar