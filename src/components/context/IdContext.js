import React, { useState } from 'react'

const Context = React.createContext({})

export function IdContextProvider({ children }) {

    const [idJob, setIdJob] = useState(0)


    return (

        <Context.Provider value={{ idJob, setIdJob }}>
            {children}
        </Context.Provider>
    )

}


export default Context