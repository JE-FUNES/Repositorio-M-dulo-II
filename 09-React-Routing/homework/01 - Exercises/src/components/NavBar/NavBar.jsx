import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

/*Renderiza el componente NavLink con los siguientes atributos:

to que redirija a la ruta "/discounts", que envuelva la etiqueta span "Promociones".

className esta propiedad debe tener adjunta una función. Esta función recibe un parámetro llamado isActive en 
forma de destructuring. En caso de que el parámetro sea true la clase de esta propiedad debe ser .active caso contrario, .disable.

Hint: isActive será true cuando el link dentro de to coincida con el que está actualmente en el navegador.*/

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLink to="/">
            <img src={logoHenry} alt="logo-henry" />
          </NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLink to="/shipping">
              <span>Navieras</span>
            </NavLink>
          </li>
          <li>
          <NavLink 
            to="/discounts" 
            className={({isActive})=>isActive?styleNav.active:styleNav.disable
            }
          >
            <span>Promociones</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
