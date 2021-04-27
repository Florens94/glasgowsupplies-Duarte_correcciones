import cart from '../img/cart.png'
import './cartwidget.css'



export const CartWidget = () =>{
    return (
        <div>
        <img className="cart" src={cart} alt="cart"/>
        </div>
        


    )
}