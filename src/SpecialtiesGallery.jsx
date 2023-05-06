import './SpecialtiesGallery.css'
import Specialty from './Specialty.jsx'
import imgHeart from './images/specialties-icons/heart.png'
import imgAllergy from './images/specialties-icons/allergy.png'
import imgDentist from './images/specialties-icons/dentist.png'
import imgGeneral from './images/specialties-icons/general.png'
import imgOrtho from './images/specialties-icons/ortho.png'
import imgGyno from './images/specialties-icons/gyno.png'
import { Link } from 'react-router-dom';
import Doctors from './Doctors'

export default function() {
    return (
        <div className="specialties-container">
            <div className="specialties-row-text">
                <h3>Top Searched Specialties</h3>
                <a href="#">View All Specialties &gt;&gt;&gt;</a>
            </div>

            <div className="specialties-gallery">
                <Specialty title="Heart Surgeon" icon={imgHeart}/>
                <Specialty title="Allergy Doctor" icon={imgAllergy} />
                <Specialty title="Dentist" icon={imgDentist} />
                <Specialty title="General Practicioner" icon={imgGeneral} />
                <Specialty title="Orthopedic Surgeon" icon={imgOrtho} />
                <Specialty title="Gynecologist" icon={imgGyno} />


            </div>
        </div>
    )
}
