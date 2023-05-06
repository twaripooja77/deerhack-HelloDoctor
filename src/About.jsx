import './About.css';
import laptopImg from './images/laptop.png';

export default function About() {
    return (
        <div id="about">
            <div className="about-text">
            <h2>About Us</h2>
                <p>Hello! We're Hello Doctor – your go-to team for all things health and wellness. 
                    We're a group of healthcare professionals who believe that taking care of your health should be simple, 
                    convenient, and even a little fun! Our team is here to support you every step of the way,
                     no matter what your healthcare needs are. 
                     Thanks for choosing Hello Doctor – we're excited to help you achieve your best health and wellbeing!</p>

            </div>
        <img className="laptopImg" src={laptopImg} alt="" />
        </div>
    )
}
