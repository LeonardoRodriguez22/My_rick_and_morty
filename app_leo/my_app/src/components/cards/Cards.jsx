import Card from './Card';




export default function Cards(props) {
   const { characters } = props;
   
   
   return (
      <div>
      {characters ? (characters.map((element) => (
         <Card 
         key={element.id}
         name={element.name}
         species={element.species}
         gender={element.gender}
         image={element.image}
         onClose={ () => window.alert('Emulamos que se cierra la card')}
         />
      ))
      ) : (
         <h3>no hay personaje</h3>
      )}

   </div>
   );
}
