import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom";
import { Shop } from './component/layout/Shop.jsx';
import Product from './component/layout/Product/Product.jsx';
import { LoginSignup } from './component/layout/LoginSignup/LoginSignup.jsx';
import { Cart } from './component/layout/Cart/Cart.jsx';
import { ShopCategory } from './component/layout/ShopCategory/ShopCategory.jsx';
import Footer from './component/layout/Footer/Footer.jsx';
import Navbar2 from './component/layout/Navbar2/Navbar2.jsx';
import Navbar from './component/layout/Header/Header.jsx';
import women_banner from './component/layout/Assets/banner_women.png'
import men_banner from './component/layout/Assets/banner_mens.png'
import kid_banner from './component/layout/Assets/banner_kids.png'
import About from './component/layout/Footer_Pages/About.jsx';
import Offices from './component/layout/Footer_Pages/Offices.jsx';
import Contact from './component/layout/Footer_Pages/Contact.jsx';

function App() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];
  return (
    

    <div>
      <BrowserRouter>
    <Navbar/>
     <Navbar2/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/handlooms' element={<ShopCategory banner ={men_banner} category="handloom"/>}/>
        <Route path='/handicrafts' element={<ShopCategory banner ={women_banner} category="handicraft"/>}/>
        <Route path='/carpet' element={<ShopCategory banner ={kid_banner} category="carpet"/>}/>
        <Route path='/agro' element={<ShopCategory category="agro"/>}/>
        <Route path='/footwear' element={<ShopCategory category="footwear"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/offices' element={<Offices/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;
