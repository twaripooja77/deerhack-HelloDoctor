import React from 'react';
import { useState } from 'react';

export default function User() {
    addDoc(collection(db,"user"),{
       
        name:user.displayName,
        gmail:user.email,
        photo:user.photoURL,
        phone_number:user.phoneNumber

    });
  return (
    <div>
      
    </div>
  )
}
