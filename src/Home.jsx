import React from 'react';
import Header from './Header';
import Body from './Body';
import Login from './Login';
import Component from './SpecialtiesGallery.jsx';
import { useStateValue } from './StateProvider';
import Cards from './Cards';
import About from './About';
import Footer from './Footer';
import Admin from './Admin';

export default function Home() {
    const [{user}, dispatch]=useStateValue();
    

  return (
    <>
    <div>
      {!user ? (
        <Login/>

      ):(
        <>
        
        <Header/>
        <Body/>
        <Cards/>
        <Component />
        <About/>
        <Footer/>
       
        

        </>
      )}
    </div>
    </>
  )
}
