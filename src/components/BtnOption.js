import React, { useContext, useEffect, useState, useCallback } from 'react'
import JobsContext from  './context/JobsContext'
import getSpecCountry from '../services/getSpecCountry';
import styled from '@emotion/styled'

const Inpradio = styled.div`


    .lab__radio {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bluedark);
        font-family: var(--font__prim);
        margin-top: 2rem;

    }

    .input__radio { 
        height: 1.8rem;
        width: 1.8rem;        
        margin-right: 1.2rem;
        vertical-align: middle;
        margin-top: -.1rem;

    }

    input[type=radio]{
        appearance: none;
        border-radius: 50%;
        border: 1px solid var(--graymed);
        background-color: transparent;
    }

     input[type='radio']:checked {
       border: none;
    }

    input[type=radio]:checked:before {
        content: '◉';
        position: absolute;
        font-size: 2.2rem;
        color: var(--bluerey);
        margin-left: -.2rem;
        margin-top: -.8rem;
      } 

`;


const BtnOption = () => {

const [ searchcount, setSearchCount ] = useState('')
const { setJobs } = useContext(JobsContext)
const [ btnchecked, setBtnChecked ] = useState(false)
const [ framework, setFramework ] = useState(0)

var  nameCountry;

const handleOption = (e, nameCountry) => {
    e.preventDefault()
    setSearchCount(nameCountry)
    setBtnChecked(true)
       
}

const cambioRadio = (e) => {
    setFramework(e.target.value)
       
}



useEffect (() => {
    getSpecCountry(searchcount, setBtnChecked).then(job => setJobs(job))
}, [btnchecked])



  return (
    <Inpradio>
        <label 
            className="lab__radio"
        >
            
            <input name="country_radio" 
                type="radio" 
                className="input__radio"
                checked = {framework == 1 ? true : false}
                value = '1'
                onClick={e => handleOption(e, nameCountry = 'Worldwide')}
                onChange ={cambioRadio }
            />             
        Worldwide</label>

         <label 
            className="lab__radio"
        >
            
            <input name="country_radio" 
                type="radio" 
                className="input__radio"
                checked = {framework == 2 ? true : false}
                value = '2'
                onClick={e => handleOption(e, nameCountry = 'USA')}
                onChange = {cambioRadio }
            />             
       USA</label>

         <label 
            className="lab__radio"
        >
            
            <input name="country_radio" 
                type="radio" 
                className="input__radio"
                checked = {framework == 3 ? true : false}
                value = '3'
                onClick={e => handleOption(e, nameCountry = 'Canada')}
                onChange = {cambioRadio}
            />             
       Canada</label>

         <label 
            className="lab__radio"
        >
            
            <input name="country_radio" 
                type="radio" 
                className="input__radio"
                checked = {framework == 4 ? true : false}
                value = '4'
                onClick={e => handleOption(e, nameCountry = 'Europe')}
                onChange = {cambioRadio}
            />             
        Europe</label>


     <label 
            className="lab__radio"
        >
            
            <input name="country_radio" 
                type="radio" 
                className="input__radio"
                checked = {framework == 5 ? true : false}
                value = '5'
                onClick={e => handleOption(e, nameCountry = 'Americas')}
                onChange = {cambioRadio}
            />             
       Americas</label>

    </Inpradio>
  )
}

export default BtnOption


