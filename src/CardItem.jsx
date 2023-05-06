import './Cart.css'
import placeholderImg from './images/placeholder-meds-image.png'

export default function CartItem({medImg={placeholderImg}, medName, medQty, medPrice}) {
    const medTotal = medQty*medPrice;
    return (
        <tr>
            <td><img src={medImg} /></td>
            <td><span className="medName">{medName}</span></td>
            <td>{medQty}</td>
            <td>Rs. {medPrice}</td>
            <td>Rs. {medTotal}</td>
            <td><button className="cart-remove">Remove</button></td>
        </tr>
    )
}
