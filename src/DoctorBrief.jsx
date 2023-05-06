import './DoctorBrief.css'
import placeholderPhoto from './images/placeholder-photo.png'
import hospitalIcon from './images/icon-hospital.png'

export default function DoctorBrief({drPhoto=placeholderPhoto, drName='John doe', drProfession, drWorkplace, drExperience, drDescription, drSatisfaction='-', drCharge}) {
    return (
        <div className="drBrief">
            <div className="drPhoto">
                <img src={drPhoto} alt="" />
            </div>
            <div className="drMid">
                <h3>Dr. {drName}</h3>
                <h4>{drProfession}</h4>
                <span className="bubble-shadow"><img src={hospitalIcon} /> {drWorkplace}</span><br />
                <span><b>Work Experience: {drExperience} Years</b></span>
                <p>{drDescription}</p>
                <a className="learnMore" href="#">Learn More</a>
            </div>
            <div className="drRight">
                <div className="drFeatures">
                    <div className="bubble-shadow"><b>{drSatisfaction}%</b><br />Satisfaction Rate</div>
                    <div className="bubble-shadow"><b>Rs. {drCharge}</b><br />Standard Fee</div>
                </div>
                <a className="white-button" href="#">Medical Consultation</a>
                <a className="green-button" href="#">Book Appointment</a>
            </div>
        </div>
    )
}
