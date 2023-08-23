import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  /* Dentro del div, mapea y renderiza las props animals de acuerdo a lo que necesitemos:
Por cada animal, debemos renderizar un div con lo siguiente:
Una etiqueta h5 con el nombre del animal.
Una etiqueta img con los atributos:
src asignando como valor la imagen del animal.
alt asignando como valor el nombre del animal.
width con un valor de 300px (para darle un tamaño apropiado a la imagen).
Una etiqueta span con la especie del animal.*/


  render() {
    return (
    <div>
      {this.props.animals.map((animal, index) => {
        return (
        <div key={index}>
          <h5>{animal.name}</h5>
          <img src={animal.image} alt={animal.name} width="300px" />
          <span>{animal.specie}</span> 
        </div>
  );
        })}
    </div>
  );
}
}
