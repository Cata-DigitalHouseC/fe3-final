import React from 'react'

export const DentistaDetalle = () => {

  const params=useParams()
  const [dentistaSelected, setDentistaSelected] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users/:${params.id}`
  const dentistaFav = localStorage.getItem('dentista')

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setDentistaSelected(data))
  },[])


  return (
    <div>
      <h1>Detalles del dentista</h1>
      <h3>{dentistaSelected.name}</h3>
      <h3>{dentistaSelected.email}</h3>
      <h3>{dentistaSelected.phone}</h3>
      <h3>{dentistaSelected.website}</h3>
    </div>
  )
}
