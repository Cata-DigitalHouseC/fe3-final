import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useGlobalContext } from '../Components/utils/global.context'
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {tema, cambiarTemaCSS}=useGlobalContext();

  

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}><h3>Home</h3></Link>
      <Link to={routes.destacados}><h3>Destacados</h3></Link>
      <Link to={routes.contacto}><h3>Contacto</h3></Link>
      <Link to={routes.detalleDentista}><h3>Detalle Dentista</h3></Link>
      <button onClick={cambiarTemaCSS}>Change theme</button>
    </nav>
  )
}

export default Navbar