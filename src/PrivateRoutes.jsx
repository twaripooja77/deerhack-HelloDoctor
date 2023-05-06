import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Doctors from './Doctors';
import Medicine from './Medicine';
import Home from './Home';
import Admin from './Admin';
import Pharmacy from './Pharmacy';

export default function PrivateRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/medicines' element={<Medicine/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/pharmacy' element={<Pharmacy/>}/>
    </Routes>
    </>
  )
}
