import './itemListContainer.css'
import {NavBar} from '../navbar/navbar';
import ItemCount from '../itemCount/itemCount'


export const ItemListContainer = () => {
    return (

        <div>
            <NavBar/>
        <section>
            <h3>AGREGA TU PRODUCTO</h3>
            <ItemCount/>
        </section>
        </div>

    )
}

