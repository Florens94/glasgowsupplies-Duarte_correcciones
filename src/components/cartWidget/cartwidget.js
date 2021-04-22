import cart from '../img/cart.png'
import './cartwidget.css'
import {ItemListContainer} from '../itemListContainer/itemListContainer'



export const CartWidget = () =>{
    return (

        <img className="cart" src={cart} alt="cart"/>


    )
}