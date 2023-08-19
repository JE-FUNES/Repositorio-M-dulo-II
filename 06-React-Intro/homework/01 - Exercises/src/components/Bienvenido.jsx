/*
1- Que la función renderice un div.
2- Dentro de este div, crea la etiqueta correspondiente para un título h1 (puedes colocar el texto que desees).
3- Encontrarás una constante de tipo string llamada studentName, asígnale un texto con tu nombre. 
    Dicha constante debe ser renderizada dentro de una etiqueta h3.
4- Encontrarás una constante llamada techSkills de tipo array, con 5 elementos. 
Los elementos de este arreglo deben renderizarse en una lista desordenada.
Tip: para recorrer el arreglo y retornar elementos de acuerdo a su contenido, puedes usar el método map.
*/


import React from "react";
import Botones from './Botones.jsx';

const studentName = " Julia " // string

const alerts = { m1: "Aprobado", m2: "En curso" }; // objeto

const techSkills = [
  {id: "1", name: "Html"}, 
  {id: "2", name: "Css"}, 
  {id: "3", name: "JavaScript"}, 
  {id: "4", name: "React"},
  {id: "5", name: "Redux"}
]; // array de strings: lo lleve a App
export default function Bienvenido() {
  
  const list = techSkills.map(item => 
    <li key={item.id}>{item.name}</li>
    );
    
    
      
  // el código de tu componente acá
  return (
    <div>
      <h1>EJERCICIO 1 JULY !!!</h1>
      <h3>
        {studentName};
      </h3>
      <ul>{list}</ul>
      <Botones alerts = {alerts}/>
      
      
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
