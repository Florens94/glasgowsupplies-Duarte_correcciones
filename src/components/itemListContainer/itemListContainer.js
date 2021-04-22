import './itemListContainer.css'
import {NavBar} from '../navbar/navbar';

export const ItemListContainer = (props) => {
    return (
        <div>
            <NavBar/>
        <section>
        <div>
            <h2>{props.greeting}</h2>
        </div>
        </section>
        </div>
    )
}