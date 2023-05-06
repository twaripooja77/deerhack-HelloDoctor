import React from 'react';
import { useState } from 'react';
import db from './firebase';
import './Admin.css';
import { collection, getFirestore, serverTimestamp, FieldValue, addDoc } from "@firebase/firestore";

export default function Admin() {
    const[name,setName]=useState("");
    const[photoUrl, setPhotoUrl]=useState("");
    const[profession,setProfession]=useState("");
    const[work_at,setWork_at]=useState("");
    const[experience,setExperience]=useState("");
    const[description,setDescription]=useState("");
    const[rate,setRate]=useState("");
    const[charge,setCharge]=useState("");
    const[education,setEducation]=useState("");


   

    const handleDoctors=(e)=>{
        e.preventDefault();
  
       addDoc(collection(db,"doctors"),{
           name:name,
           photo:photoUrl,
           education:education,
           description:description,
           profession:profession,
           satisfaction_rate:rate,
           standard_fee:charge,
           work_experience:experience,
           working_at:work_at,

        })
        setName("");
            setPhotoUrl("");
            setEducation("");
            setDescription("");
            setProfession("");
            setRate("");
            setCharge("");
            setExperience("");
            setWork_at("");
         
    }

    
     
    return (
        <div>
            <h1>Welcome, Admin!</h1>
            <div className="admin-options">
                <div className="add-doctor">
                    <h4>Add a doctor</h4>
                    <form>
                        <label><span>Name: </span> <input type='text' value={name}
        onChange={(e)=>setName(e.target.value)}/></label>
                        <label><span>Photo URL: </span><input type='text' value={photoUrl}
        onChange={(e)=>setPhotoUrl(e.target.value)}/></label>
                        <label><span>Education: </span><input type='text' value={education}
        onChange={(e)=>setEducation(e.target.value)}/></label>
                        <label><span>Profession: </span><input type='text'value={profession}
        onChange={(e)=>setProfession(e.target.value)}/></label>
                        <label><span>Satisfaction Rate: </span><input type='text' value={rate}
        onChange={(e)=>setRate(e.target.value)}/></label>
                        <label><span>Standard Fee: </span><input type='text' value={charge}
        onChange={(e)=>setCharge(e.target.value)}/></label>
                        <label><span>Work Experience: </span><input type='text' value={experience}
        onChange={(e)=>setExperience(e.target.value)}/></label>
                        <label><span>Working at: </span><input type='text' value={work_at}
        onChange={(e)=>setWork_at(e.target.value)}/></label>
                        <label><span>Description: </span><textarea rows={5} cols={22} value={description}
        onChange={(e)=>setDescription(e.target.value)}/></label>
                    </form>
                    <button onClick={handleDoctors} type="submit">Submit</button>
                </div>

               

                <div  className="add-pharmacy">
                    <h4>Add Pharmacy</h4>
                    <form>
                        <label><span>Name: </span><input type="text" /></label>
                        <label><span>Location: </span><input type="text" /></label>
                        <label><span>License No.: </span><input type="number" /></label>
                    </form>
                    <button>Submit</button>
                </div>
                <div  className="add-lab-test">
                    <h4>Add Lab test</h4>
                    <form>
                        <label><span>Name: </span><input type="text" /></label>
                        <label><span>Photo URL: </span><input type="text" /></label>
                        <label><span>Education: </span><input type="text" /></label>
                        <label><span>Profession: </span><input type="text" /></label>
                        <label><span>Satisfaction Rate: </span><input type="number" /></label>
                        <label><span>Standard Fee: </span><input type="number" /></label>
                        <label><span>Work Experience: </span><input type="number" /></label>
                        <label><span>Working at: </span><input type="text" /></label>
                        <label><span>Description: </span><textarea cols="22" rows="5"/></label>
                    </form>
                    <button>Submit</button>
                </div>

            </div>
        </div>
    )
}
