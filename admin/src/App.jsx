import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom";
import LoginSignupseller from './Components/LoginSignupseller/LoginSignupseller';

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Admin/>
      <Routes>
      <Route path='/loginseller' element={<LoginSignupseller />} />
      </Routes>
    </div>
  )
}

export default App