import React from 'react'
import { useDentistaState } from '../Components/utils/DentistaContext'

const Home = () => {
  const {dentistas} = useDentistaState();

  return (
    <>
        <h1>Home</h1>
        <h3>Lista de dentistas</h3>
        <div className='list-conatiner'>
            {dentistas.map((dentista) => 
                <Link key={dentista.id} to={'/dentist/'+dentista.id}>
                    <Card { dentista }={ dentista }/>
                </Link>}
        </div>
    </>
  )
}

export default Home