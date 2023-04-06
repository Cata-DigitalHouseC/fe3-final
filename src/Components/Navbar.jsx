import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}>Home</Link>
      <Link to={routes.destacados}>Destacados</Link>
      <Link to={routes.contacto}>Contacto</Link>
      <Link to={routes.detalleDentista}>Detalle Dentista</Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar