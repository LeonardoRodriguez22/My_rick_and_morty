import Card from './Card';




export default function Cards(props) {
   const { characters , onClose } = props;
   
   
   return (
      <div>
      {characters ? (characters.map((element) => (
         <Card 
         key={element.id}
         name={element.name}
         species={element.species}
         gender={element.gender}
         image={element.image}
         onClose={ () => onClose(element.id)}
         />
      ))
      ) : (
         <h3>no hay personaje</h3>
      )}

   </div>
   );
}
