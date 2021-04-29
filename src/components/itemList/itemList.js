import {Item} from '../Item/item';

function ItemList () {
const product= [
    {
        id: 0,
        title:'Maquina rotativa',
        description:'Maquina importada',
        price: '$10.000',
        
    },
    {
        id: 1,
        title:'Maquina a bobina',
        description:'Maquina clasica edicion nacional',
        price:'$8.000'   
    },
    {
        id: 2,
        title:'Maquina Pen',
        description:'Estilo moderno',
        price:'$28.000'
    }
]

return(
<Item/>
)
}

export default ItemList;
