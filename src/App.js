import './App.css';
import {NavBar} from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemList from './components/itemList/itemList'
import {Insumos} from './components/itemListContainer/itemListContainer'



function App() {
  return (
    <div className="App">
      <header className="navBar">
        <p className="myApp"><a class="home" href="#">
          GLASGOW TATTOO SUPPLIES</a>
        </p>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ItemList/>

    </div>
  );
}

export default App;

