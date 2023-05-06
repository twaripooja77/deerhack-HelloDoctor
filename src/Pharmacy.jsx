import React from 'react'
import { useState } from 'react';
import db from './firebase';
import './Admin.css';
import { collection, getFirestore, serverTimestamp, FieldValue, addDoc } from "@firebase/firestore";

export default function Pharmacy() {
    const[med_name,setMed_Name]=useState("");
    const[med_photo, setMed_Photo]=useState("");
    const[med_company,setMed_Company]=useState("");
    const[med_usage,setMed_Usage]=useState("");
    const[med_effects,setMed_Effects]=useState("");
    const[med_price,setMed_Price]=useState("");

    const handleMedicines=()=>{
        addDoc(collection(db,"medicine"),{
            med_name:med_name,
            med_company:med_company,
            med_usage:med_usage,
            med_effects:med_effects,
            med_price:med_price,
            med_photo:med_photo
    
         })
         setMed_Name("");
         setMed_Company("");
         setMed_Usage("");
         setMed_Effects("");
         setMed_Price("");
         setMed_Photo("");
    
        }
  return (
    <div>
    <h1>Welcome, Pharmacy!</h1>
    <div className="admin-options">
        

        <div  className="add-medicine">
            <h4>Add medicine</h4>
            <form>
                <label><span>Name: </span><input type='text' value={med_name}
onChange={(e)=>setMed_Name(e.target.value)}/></label>
                <label><span>Company: </span><input type='text' value={med_company}
onChange={(e)=>setMed_Company(e.target.value)}/></label>
                <label><span>Photo URL: </span><input type='text' value={med_photo}
onChange={(e)=>setMed_Photo(e.target.value)}/></label>
               
                <label><span>Usage: </span><input type='text'value={med_usage}
onChange={(e)=>setMed_Usage(e.target.value)}/></label>
                <label><span>Price (Nrs.): </span><input type='text' value={med_price}
onChange={(e)=>setMed_Price(e.target.value)}/></label>
                <label><span>Side Effects: </span><textarea rows={5} cols={22} value={med_effects}
onChange={(e)=>setMed_Effects(e.target.value)}/></label>
            </form>
            <button onClick={handleMedicines} type="submit">Submit</button>
        </div>

        
        
    </div>
</div>
  )
}
