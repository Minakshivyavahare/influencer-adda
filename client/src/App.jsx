import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './Pages/AdminDashboard';
import PageNotFound from './Pages/PageNotFound';
import Profile from './Pages/Profile';
import Influencer from './Pages/Influencer';

import PrivateComponent from './components/PrivateComponent';

const App = () => {
  return (
   <Router>
       <Navbar />
    <Routes>
    <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/auth' element={<PrivateComponent/>}>
       <Route path='admin' element={<AdminDashboard/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='influencer/:id' element={<Influencer/>}/>
      </Route>
    </Routes>
    <Footer />
    <ToastContainer/>
   </Router>
  )
}

export default App