import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [menu,setMenu]=useState("shop");
  return (
    <div className='nav2'>
    <nav>
      <div class="nav2-links">
      <ul>
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none',color:'#000000'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("handlooms")}><Link style={{textDecoration:'none',color:'#000000'}} to='/handlooms'>Handloom & Textile</Link>{menu==="handlooms"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("handicrafts")}><Link style={{textDecoration:'none',color:'#000000'}} to='/handicrafts'>Handicrafts</Link>{menu==="handicrafts"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("carpet")}><Link style={{textDecoration:'none',color:'#000000'}} to='/carpet'>Carpet & Durrie</Link>{menu==="carpet"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("agro")}><Link style={{textDecoration:'none',color:'#000000'}} to='/agro'>Agro-based-food</Link>{menu==="agro"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("footwear")}><Link style={{textDecoration:'none',color:'#000000'}} to='/footwear'>Footwear</Link>{menu==="footwear"?<hr/>:<></>}</li>
        
      </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar2;
