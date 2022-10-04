import React, {useState} from 'react'

const Context = React.createContext({})

export function PagesContextProvider ({children}) {

    const [ numInit, setNumInit ] = useState(0)
    const [ numEnd, setNumEnd ] = useState(5)
    const [ pagecurrent, setPageCurrent ] = useState(1)
    const [ selected, setSelected ] = useState({selec: true, pageSelected:1})

    return (
    
    <Context.Provider value={{ numInit, setNumInit, numEnd, setNumEnd, selected, setSelected, pagecurrent, setPageCurrent}}>
        {children}
    </Context.Provider>
    )

}


export default Context