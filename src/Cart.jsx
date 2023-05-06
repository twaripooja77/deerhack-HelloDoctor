import './Cart.css'
import './DoctorBrief.css'
import CartItem from './CartItem.jsx'

export default function Cart() {
    return (
        <div>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        <CartItem 
                            medName='Jeevan Jal'
                            medQty='2'
                            medPrice='20'
                />
                </tbody>
            </table>
            <div>
                <button className="white-button">Continue Shopping</button>
                <button className="green-button">Go to Check out</button>
            </div>
        </div>

    )
}
