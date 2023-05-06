
import React from 'react';
import './DoctorBrief.css'
import placeholderPhoto from './images/placeholder-photo.png'
import hospitalIcon from './images/icon-hospital.png'
import db from './firebase';
import { collection } from "firebase/firestore"; 
import { onSnapshot } from "@firebase/firestore";


export default function MedicineBrief({med_photo=placeholderPhoto, med_name, med_company, med_usage, 
med_effects, med_price}) {
    
  return (
    <div className="drBrief">
            <div className="drPhoto">
                <img src={med_photo} alt="" />
            </div>
            <div className="drMid">
                <h3>Name: {med_name}</h3>
                <h4>Company: {med_company}</h4>
                <h4>Usage:{med_usage}</h4>
                <span><b>Effects {med_effects}</b></span>
                
            </div>
            <div className="drRight">
                <div className="drFeatures">
                   
                    <div className="bubble-shadow"><b>Rs. {med_price}</b><br /></div>
                </div>
                <a className="green-button" href="#">Add to cart</a>
            </div>
        </div>
  )
}

    
