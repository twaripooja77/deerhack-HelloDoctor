
import './Footer.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
export default function Footer() {
    return (
        <footer>
                <div className="half-ellipse"></div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Doctor</a></li>
                        <li><a href="#">Pharmacy</a></li>
                        <li><a href="#">Lab Tests</a></li>
                        <li><a href="#">About Us</a></li>
                        <Typography variant="h4"  sx={{color:"black", fontSize:'15px', fontWeight:200, mt:'5px',ml:'5px' }}component={Link} to='/admin'>ADMIN</Typography>
                        <li></li>
                        <Typography variant="h4"  sx={{color:"black", fontSize:'15px', fontWeight:200, mt:'5px',ml:'5px' }}component={Link} to='/pharmacy'>PHARMACY</Typography>

                    </ul>
                </nav>
                <span>&copy; 2023 Hello Doctor.</span>
        </footer>
    )
}
