import React, {useContext, useState} from 'react'
import PagesContext from './context/PagesContext'
import styled from '@emotion/styled'

const Btn = styled.div`

  .page {
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

.activeBtnColor {
    width: 3.6rem;
    height: 3.6rem;
    border: none;
    background-color: var(--bluerey);
    border-radius: 4px;
    text-align: center;
    justify-items: center;
    color: white;
    cursor: pointer;

  &:hover {
    background-color: var(--bluerey);
    border: none;

  &:hover span {
    color: white;
  }  

  }
  
}


`;

const BtnPage = ({numPage, setPageCurrent}) => {

  
  const { setNumInit, setNumEnd } = useContext(PagesContext)
  const [ activeButton, setActiveButton ] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setActiveButton(true)
    setNumEnd(numend)
    setNumInit(numinit) 
    setPageCurrent(numPage)
  }

  var numend = numPage * 5
  var numinit = numend - 5

  // var colorActive =  numPage === 1  || activeButton ?  'activeBtnColor' : 'page'

  return (
    <Btn>
        <button 
            className= 'page page-item active'
            onClick={handleClick}
            >                
           <span>{numPage}</span>
         </button>
          
    </Btn>
  )
}

export default BtnPage
