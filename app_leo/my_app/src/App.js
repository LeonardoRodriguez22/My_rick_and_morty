import './App.css'
import Cards from './components/cards/Cards'
import Nav from "./components/SearchBar/Nav.1"
import { useState } from 'react'

function App () {

const [characters, setCharacters] = useState([]);

function onSearch(text){
  fetch(`https://rickandmortyapi.com/api/character/${text}`)
  .then((response) => response.json())
  .then((data)=> {
    if(data.name){
      setCharacters((oldChars) => [...oldChars, data]);
    }else{
      window.alert("No hay personajes con ese ID")
    }
  });

}

function onClose (id){
  setCharacters(characters.filter(pj => pj.id !== id))
}


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav 
        onSearch={onSearch}
      />
      <div>
      </div>
     
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
     
    </div>
  )
}

export default App
