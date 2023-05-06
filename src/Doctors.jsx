import React from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import DoctorsList from './DoctorsList';
export default function Doctors() {
  return (
    <div>
        <Header/>   
      <DoctorsList/>
      <About/>
      <Footer/>
    </div>
  )
}
