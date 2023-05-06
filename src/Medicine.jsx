import React from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import MedicineList from './MedicineList';


export default function Medicine() {
  return (
    <div>
      <div>
        <Header/>   
      <MedicineList/>
      <About/>
      <Footer/>
    </div>
    </div>
  )
}




