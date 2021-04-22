import './navbar.css'
import {CartWidget} from '../cartWidget/cartwidget'

export const NavBar = () =>{
    return (
        <nav>
        <ul className="links">
          <li className="seccion"><a href="#">Tintas</a></li>
          <li className="seccion"><a href="#">Descartables</a></li>
          <li className="seccion"><a href="#">Maquinas y fuentes</a></li>
          <li className="seccion"><a href="#">Politica de compra</a></li>
          <CartWidget/>
        </ul>
      </nav>


    )
}

