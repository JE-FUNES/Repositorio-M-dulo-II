import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  let [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  /*Crea una función llamada handleInputChange, que reciba un evento como parámetro.
    Dentro de la función handleInputChange, setea del estado zoo, la propiedad zooName, 
    capturando el valor del input. */
  function handleInputChange(evento) {
    setZoo({ ...zoo, zooName: evento.target.value });
  } 

  /*Utiliza el hook React.useEffect.
Hint: No olvides que el hook ReactuseEffect recibe dos parámetros. 💡

Nota: Para que corran los test, el hook debe ser utilizado de esta manera: React.useEffect(). 
No debe utilizarse como useEffect(). 💡

Dentro del hook, usa fetch para hacer una petición al servidor db.json a través de la url 
'http://localhost:3001/zoo'. Así obtendrás el objeto zoo con los datos de los animales. 
Para utilizar fetch, es necesario usar promesas. 
Como aún no las has visto, tienes este snippet para que copies y pegues dentro del hook React.useEffect:*/
  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
  }, []);

  /*Crea una función llamada handleSpecies, que reciba un evento como parámetro.
Crea una función llamada handleAllSpecies.*/

  const handleSpecies = (event) => {
    const specie = event.target.value;

    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter((animal) => animal.specie === specie),
    });
  }

  const handleAllSpecies = () => {
    setZoo({
      ...zoo, 
      animals: zoo.allAnimals 
    })
  };
    

  return (
    <div>
      
      <label>Zoo Name:</label>
      <input id="zooName" onChange={handleInputChange} value={zoo.zooName}></input>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
      <Animals animals={zoo.animals} />
      
    </div>
  );
}
