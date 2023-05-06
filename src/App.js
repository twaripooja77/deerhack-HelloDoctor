import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Layout from './Layout';

import Login from './Login';
import { useStateValue } from './StateProvider';
import Cards from './Cards';
import { Card } from '@mui/material';
import { BrowserRouter as Router,Route,Switch,Routes, BrowserRouter} from 'react-router-dom';
import Doctors from './Doctors';
import PrivateRoutes from './PrivateRoutes';



function App() {
  const [{user}, dispatch]=useStateValue();

  return (
    <>
    <div className="app">
    <BrowserRouter>
  
    <PrivateRoutes/>

  </BrowserRouter>
    
     
   </div>
 
   
   </>
 );
 

}

export default App;


