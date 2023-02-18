import style from "./SearchBar.css"
import { useState } from "react";

export default function SearchBar(props) {
   
   const [text, setText] = useState("")
   
   function handleChage (event){
      console.log(event.target.value)
      setText(event.target.value)
   }
   
   return (
      <div className="div">
          <input className="input" value={text} type='search' onChange={handleChage} />
      <button className="button1" onClick={()=> props.onSearch(text)}>Agregar</button> 
      </div>
   );
}
