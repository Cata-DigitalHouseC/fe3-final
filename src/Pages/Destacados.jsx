import React from 'react'

const Destacados = () => {

  const {dentistasDestacados} =  JSON.parse(localStorage.getItem('dentista'))
  return (
    <div className='list-conatiner'>
        <h1>Destacados</h1>
        <h3>Lista de dentistas destacados</h3>
        {dentistas.map((dentista) => 
                <Link key={dentista.id} to={'/dentist/'+dentista.id}>
                    <Card {dentista }={ dentista }/>
                </Link>}
    </div>
  )
}

export default Destacados