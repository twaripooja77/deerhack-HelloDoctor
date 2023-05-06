import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth,provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import hdlogo from'./images/hdlogo.png';
import db from './firebase';
import { collection, getFirestore, serverTimestamp, FieldValue, addDoc } from "@firebase/firestore";



export default function Login() { 
 const [{user},dispatch]=useStateValue();
 
 

    const signIn=()=>{
      
      signInWithPopup(auth, provider)
      .then((result)=>{ 
        
        
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
          
          })
         
        })

        
      
      .catch((error)=>console.error(error.message));

      


      
      
    }
    
  return (
    <div className='login'>
        <div className="login_logo">
            
            <img src={hdlogo}/> 

        </div>
    <Button type='submit' onClick={signIn} >
        Sign In 
    </Button>
    </div>
  )
}
