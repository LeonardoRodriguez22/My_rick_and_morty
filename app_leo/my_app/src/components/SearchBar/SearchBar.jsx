import style from "./SearchBar.css"


export default function SearchBar(props) {
   return (
      <div className="div">
          <input className="input" type='search' />
      <button className="button1" onClick={()=> props.onSearch("holis")}>Agregar</button> 
      </div>
   );
}
