import React from 'react';
import { useState,useEffect } from 'react';
import MedicineBrief from './MedicineBrief.jsx';
import db from './firebase';
import { collection } from "firebase/firestore"; 
import { onSnapshot } from "@firebase/firestore";

export default function MedicineList() {
    const [medicines, setMedicines]=useState([]);
    useEffect(()=>{
      onSnapshot(collection(db,"medicine"), (snapshot)=>(
      
  setMedicines(snapshot.docs.map((doc)=>({id: doc.id, data: doc.data() })))
  ))
    },[])
    
      return(
                  // TODO sample for setting doctor details. fetch data from database & use loop instead  
  
          <>
          {medicines.map((medicine)=>(
              <MedicineBrief 
              med_name={medicine.data.med_name}
              med_company={medicine.data.med_company}
              med_usage={medicine.data.med_usage}
              med_effects={medicine.data.med_effects}
              med_price={medicine.data.med_price}
              med_photo={medicine.data.med_photo}
              
              
              />
             
            ))}
          
           
          </>
      )
}

