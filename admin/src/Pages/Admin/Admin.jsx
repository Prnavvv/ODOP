import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import LoginSignupseller from '../../Components/LoginSignupseller/LoginSignupseller'
import { Link } from 'react-router-dom';
import Training from '../../Components/Training/Training'


const Admin = () => {
  return (
    <div className='admin'>
       {localStorage.getItem('auth-token')
          ? <Sidebar />
          : <Link to='/loginseller'></Link>}
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path='/training' element={<Training/>} />
      </Routes>
     
    </div>
  )
}

export default Admin