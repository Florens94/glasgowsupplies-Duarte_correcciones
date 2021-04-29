import {useState} from 'react'
import './itemListContainer.css'
import {NavBar} from '../navbar/navbar';
import ItemCount from '../itemCount/itemCount'
import {Item} from '../Item/item'


// export const ItemListContainer = () => {
//     return (

//         <div>
//             <NavBar/>
//         <section>
//             <h3>AGREGA TU PRODUCTO</h3>
//             <ItemCount/>
//         </section>
//         </div>

//     )
// }



function Insumos() {
  const [buscarInsumo, setBuscarInsumo] = useState([])
  const[insumo, setInsumo] = useState([])
  const handleClick = async () =>{
      const elegirMaquinas = () =>{
      setInsumo(insumo)
      console.log('insumo encontrado')
    }
    const noHayStock= () =>{
      setInsumo(insumo)
      console.log('no hay mas')
    }

    let buscandoInsmos = new Promise((resolve, reject) => {
      console.log("estoy solicitando")
      console.log("Wait for it")

      setTimeout(() =>{
       resolve("encontramos tu insumo ")
      }, 2000)
    })
    .then(elegirMaquinas)
      .catch(noHayStock)


      let busquedaInsumos = async (insumo) =>{
        console.log('buscando insumos')
        const insumosEncontrados = await fetch(
          'itemList.js')

        
        const listaInsumos = insumosEncontrados.json()

        return listaInsumos
      }
      const insumoElegido = await busquedaInsumos(buscarInsumo)
      setInsumo(insumoElegido.title)
      console.log(insumoElegido)
  
}

  return (
    <div className="App">
      <h1>Buscador de insumos</h1>
      <input 
      value={buscarInsumo} 
      type='text' 
      placeholder='que insumo buscas?'
      onChange={(e)=> setBuscarInsumo(e.target.value)}/>
      <button onClick={handleClick}>elegir</button>
      {
        insumo.lenght > 0 ? (
           insumo.map((insumo) => (
           <p>{insumo.title}</p>)
           )) :(
        <p></p>)
      }
      <Item/>
    </div>
  );
  
}

export default Insumos;

