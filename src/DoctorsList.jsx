import { useState,useEffect } from 'react';
import DoctorBrief from './DoctorBrief.jsx';
import db from './firebase';
import { collection } from "firebase/firestore"; 
import { onSnapshot } from "@firebase/firestore";

export default function DoctorsList() {

    const [doctors, setDoctors]=useState([]);
  useEffect(()=>{
    onSnapshot(collection(db,"doctors"), (snapshot)=>(
    
setDoctors(snapshot.docs.map((doc)=>({id: doc.id, data: doc.data() })))
))
  },[])
  
    return(
                // TODO sample for setting doctor details. fetch data from database & use loop instead  

        <>
        {doctors.map((doctor)=>(
            <DoctorBrief 
            drName={doctor.data.name}
            drPhoto={doctor.data.photo}
            drProfession={doctor.data.profession}
            drWorkplace={doctor.data.working_at}
            drExperience={doctor.data.work_experience}
            // can't assign Number value for drExperience. make sure to use String instead
            drDescription={doctor.data.description}
            drSatisfaction={doctor.data.satisfaction_rate}
            drCharge={doctor.data.standard_fee}
            // key={post.id}
            // profilePic={post.data.profilePic}
            // message={post.data.message}
            // timestamp={post.data.timestamp}
            // username={post.data.username}
            // image={post.data.image}
            />
          ))}
        
            
        </>
    )
}
