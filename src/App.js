import './App.css';
import {NavBar} from './components/navbar/navbar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'



function App() {
  return (
    <div className="App">
      <header className="navBar">
        <p className="myApp"><a class="home" href="#">
          GLASGOW TATTOO SUPPLIES</a>
        </p>
        <NavBar/>

      </header>

    </div>
  );
}

export default App;

