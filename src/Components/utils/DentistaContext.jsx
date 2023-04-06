import {createContext, useState, useEffect, useContext} from 'react'

const DentistaStates = createContext()

const Context = ({children}) => {
    const [dentista, setDentista] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setDentista(data))
    })

    return (
        <DentistaStates.Provider value={dentista}>
            {children}
        </DentistaStates.Provider>
    )

}

export default Context
export const useDentistaState = () => useContext(DentistaStates)