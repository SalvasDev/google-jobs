import React, {useState} from 'react'

const Context = React.createContext({})

export function JobsContextProvider ({children}) {

    const [ jobs, setJobs ] = useState([])
    const [ consult, setConsult ] = useState(true)
    const [ idcurrent, setIdCurrent ] = useState(0)

    return (
    
    <Context.Provider value={{jobs, setJobs, consult, setConsult, idcurrent, setIdCurrent}}>
        {children}
    </Context.Provider>
    )

}


export default Context