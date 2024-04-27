
import React from 'react'

import './Footer.css'

import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>ODOP</p>
            </div>
            <ul className="footer-links">
                <Link to='/about' style={{textDecoration:'none',color:'#000000'}}><li>About</li></Link>
                <Link to='/offices' style={{textDecoration:'none',color:'#000000'}}><li>Offices</li></Link>
                <Link to='/contact' style={{textDecoration:'none',color:'#000000'}}><li>Contact</li></Link>
            </ul>
            <div className="footer-social-icon">
            <a href="https://www.instagram.com/" target="_blank"><div className="footer-icons-container"> <img src={instagram_icon} alt="" />
                </div></a>

                <a href="https://in.pinterest.com/" target="_blank"><div className="footer-icons-container"> <img src={pintester_icon} alt="" />
                </div></a>

                <a href="https://web.whatsapp.com/" target="_blank"><div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div></a>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer