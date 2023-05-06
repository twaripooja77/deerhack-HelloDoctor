import React from 'react';
import { Typography } from '@mui/material';
import bckimg from './images/bckimg.png';
import './Body.css';



export default function Body() {
  return (
    <div className='body'>
        
        
        <div className='hero-section'>
        <img src={bckimg}/>
    
        </div>
     <div className="ques">
     <Typography variant='h1' sx={{color:"#0B0132", fontSize:'38px',fontWeight:600, mt:'50px'}}>How Can We Help?</Typography>
     </div>

    </div>
  )
}
