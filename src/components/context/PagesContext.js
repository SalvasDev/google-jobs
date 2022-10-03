import React, {useState} from 'react'

const Context = React.createContext({})

export function PagesContextProvider ({children}) {

    const [ numInit, setNumInit ] = useState(0)
    const [ numEnd, setNumEnd ] = useState(5)

    return (
    
    <Context.Provider value={{ numInit, setNumInit, numEnd, setNumEnd}}>
        {children}
    </Context.Provider>
    )

}


export default Context