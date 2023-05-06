import './Cards.css'
import rightArrow from './images/right-arrow.png'
import cardImg1 from './images/card1.png'
import cardImg2 from './images/card2.png'
import cardImg3 from './images/card3.png';
import { Typography } from '@mui/material';

export default function Cards() {
    // image of doctors should be background image?
    return (
        <div className="cards-container">

            <a href="#" className="card card-1">
                <div className="card-left"> 
                    <h4>Online Pharmacy</h4>
                    <p>Get all types of medicines delived at your doorsteps!</p>
                    <span>Upto <b>20%</b> off</span><br />
                    <img className="rightArrow" src={rightArrow} />
                </div>
                <div className="card-right">
                    <img src={cardImg1} />
                </div>
            </a>

            <div className="cards-half-container">
                <a href="#" className="card card-2">
                
                    <div className="card-left"> 
                        <h4>Find Doctors</h4>
                        <p>Find doctors and book appointment</p>
                        <span><b>Tons</b> of doctors available</span><br />
                        <img className="rightArrow" src={rightArrow} />
                    </div>
                    <div className="card-right">
                        <img src={cardImg2} />
                    </div>
                </a>

                <a href="#" className="card card-3">
                
                    <div className="card-left"> 
                        <h4>Lab Tests</h4>
                        <p>Home sampling & lab booking by tech labs</p>
                        <span>Upto <b>20%</b> off</span><br />
                        <img className="rightArrow" src={rightArrow} />
                    </div>
                    <div className="card-right">
                        <img src={cardImg3} />
                    </div>
                </a>
    
            </div>
            <Typography variant='h1' sx={{color:"#0B0132", fontSize:'38px',fontWeight:600, mt:'50px',ml:'50px'}}>Our Specialist</Typography>

        </div>
    )
}
