import './App.css'
import Cards from './components/cards/Cards'
import Nav from "./components/Nav/Nav.1"
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"


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
      <Nav onSearch={onSearch} />
       <Routes>
        <Route
         path='/home' 
         element={<Cards characters={characters} onClose={onClose} />} 
         />
         <Route
         path='/about' 
         element={<About />} 
         />
         <Route
         path='/detail/:id' 
         element={<Detail />} 
         />
       </Routes>
     </div>
  );
}

export default App
