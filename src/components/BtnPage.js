import React, {useContext} from 'react'
import PagesContext from './context/PagesContext'
import styled from '@emotion/styled'

const Btn = styled.div`

  .page {
    z-index: -100;
    width: 3.6rem;
    height: 3.6rem;
    border: 1px solid var(--graymed);
    background-color: transparent;
    border-radius: 4px;
    text-align: center;
    justify-items: center;
    color:  var(--graymed);
    cursor: pointer;
    font-size: 1.4rem;

  &:hover {
    background-color: var(--bluerey);
    border: none;

  &:hover span {
    color: white;
  }  
  }
}

#actived {
  background-color: var(--bluerey);
  color: white;
  border: none;
}

`;

const BtnPage = ({numPage, setPageCurrent}) => {

  
  const { setNumInit, setNumEnd, selected, setSelected } = useContext(PagesContext)

  var {selec, pageSelected } = selected 

  const handleClick = e => {
    e.preventDefault()

    setNumEnd(numend)
    setNumInit(numinit) 
    setPageCurrent(numPage)
    
    const actualPage = {
      selec : true,
      pageSelected : numPage      
    }    
    setSelected( actualPage )

  }

  var numend = numPage * 5
  var numinit = numend - 5

 var btnSelected = selec && (pageSelected === numPage)  ? 'actived' : ''

  return (
    <Btn>
        <button 
            className= 'page'
            onClick={handleClick}
            id={btnSelected}
            >                
           <span>{numPage}</span>
         </button>
          
    </Btn>
  )
}

export default BtnPage
