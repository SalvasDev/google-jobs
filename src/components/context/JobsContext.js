import React, {useState} from 'react'

const Context = React.createContext({})

export function JobsContextProvider ({children}) {

    const [ jobs, setJobs ] = useState([])
    const [ consult, setConsult ] = useState(true)


    return (
    
    <Context.Provider value={{jobs, setJobs, consult, setConsult}}>
        {children}
    </Context.Provider>
    )

}


export default Context