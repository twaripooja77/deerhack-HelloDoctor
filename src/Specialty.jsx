import rightArrow from './images//right-arrow.png'
import { Link } from 'react-router-dom';


export default function({title, icon}) {
    return (
            <div className="specialty">
                    <div>
                        <h4  component={Link} to="/doctors">{title}</h4>
                        <img className="rightArrow" src={rightArrow} />
                    </div>
                    <img src={icon} />
            </div>
    )
}
