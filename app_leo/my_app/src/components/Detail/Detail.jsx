import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";




export default function Detail(props){
    

    const [personaje, setPersonaje] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    
    function backHome(){
        navigate("/home")
    }

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => response.json())
  .then((char)=> {
    if(char.name){
      setPersonaje(char);
    }else{
      window.alert("No hay personajes con ese ID")
    }
  })
  .catch((err)=>{
    window.alert("No hay personajes con ese ID")
  });
    return ()=> setPersonaje({});
},[id]);


    return(
    <div>
        {personaje.id ?( 
        <div>
             <div>
                <button onClick={backHome}>Volver</button>
            </div>
            <h1>{personaje.name}</h1>
            <h5>{personaje.status}</h5>
            <h5>{personaje.species}</h5>
            <h5>{personaje.gender}</h5>
            <h5>{personaje.origin?.name}</h5>
            <div>
                <img src= {personaje.image} alt= {personaje.name} />
            </div>
        </div>
        ) : ( 
        <h1> Loading...</h1>
        )}
    </div>
    );
}
    