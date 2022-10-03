import React, {useContext, useState} from 'react'
import BtnOption from './BtnOption';
import JobsContext from  './context/JobsContext'
import getFullTime from '../services/getFullTime';
import styled from '@emotion/styled'
import getCountryJobs from '../services/getCountryJobs';

const Container = styled.div`
    width: 100%;
    height: 100%;

  

    .inp_several {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 4.8rem;
        background-color: var(--white);
        border-radius: 4px;
        align-items: center;
        column-gap: 1rem;       
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

        input {
            width: 100%;
            height: 100%;
            border: none;
            background-color: transparent;
            color: var(--graymed);
            outline: none;


            &::placeholder {
                text-align: left;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 1.2rem;
                color: var(--graymed);
            }                 
        }     
    }

    .material-symbols-outlined {
        margin-left: 1.4rem;
        color: var(--graymed);
        font-size: 2rem;
        vertical-align: middle;
        font-variation-settings:
            'FILL' 0,
            'wght' 600,
            'GRAD' 0,
            'opsz' 48
    }

    .input_country {
        width: 90%;
    }


    .inp_several:focus-within span {
            color: var(--bluedark) ;
        }

    .section__radio {
        margin-top: 2.5rem;

    }

  
    
    label {
        display: block;
        width: 100%;
    }

    .lab__full  {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bluedark);
        font-family: var(--font__prim);
      
    }    

    .check__full {
        width: 1.8rem;
        height: 1.8rem;        
        margin-right: 1rem;   
        vertical-align: middle;   
       }      
       
    input[type='checkbox'] {
        appearance: none;
        border: 1px solid var(--graymed);
        background-color: transparent;
        border-radius: 2px;
        cursor: pointer;
    }

    input[type='checkbox']:checked {
        border: none;
     }



    input[type='checkbox']:checked:before {
        content: '';
        background-color: var(--bluerey);
        color: white;
        border: none;
        font-size: 1.4rem;
        padding: .2rem;     
        text-align: center;
        border-radius: 2px;
        font-family: "Font Awesome 5 Free"; 
        font-weight: 900; 
    }


                

    .lab__radio {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bluedark);
        font-family: var(--font__prim);
        margin-top: 2rem;

    }

    
      h1 {
        font-family: var(--font__prim);
        font-weight: 700;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: var(--graymed);
        margin-top: 3rem;
        margin-bottom: 1.4rem;
      }

      .error {
            color: #EA8282;
            border-radius: 12px;
            margin-bottom: 2rem;
            text-align: left;
            font-size: 1.6rem;
            font-family: var(--font__prim);            
            
    }
 
`;


const Aside = ({handleForce}) => {


const { setJobs, setConsult } = useContext(JobsContext)
const [ ischecked, setIsChecked ] = useState(false)
const [ error, setError ] = useState(false)
const [ searchcountry, setSearchCountry ] = useState('')


const returnCountries = () => {
        handleForce()
    } 

const handleCheck = (e) => {
    e.preventDefault()
        if (ischecked === false) {
            setIsChecked(true)
            getFullTime().then(jobsconsult => setJobs(jobsconsult)) 
        } else {
            setIsChecked(false)
            returnCountries()
        }
 }

 

 // When user make enter en country serch bar
 const handleSubmit = (e) => {
    e.preventDefault()
     if (searchcountry.trim() === '') {
        setError(true)
        return
    } else {
        setError(false)
        getCountryJobs(searchcountry, setConsult).then(job => setJobs(job))
    }
 }

 // Function for set items into state
 const handleChange = e => {
    setSearchCountry(e.target.value)        
 }
  
const btnOptions = ['Worldwide', 'USA', 'Canada', 'Europe', 'Americas']
var i =  0

  return (
    <Container>

       <label
        className="lab__full">
             <input
                type="checkbox" 
                checked = {ischecked}
                className="check__full"
                onChange = { e => handleCheck(e) }                    
            />
            Full time
        </label>
        
        <h1>Location</h1>
        <form
            onSubmit={handleSubmit}
         >
        <div className="inp_several">          
            <span className="material-symbols-outlined">public </span>        
            <input
                 className='input_country'  
                 type="text" 
                 placeholder='Country'
                 onChange= {handleChange}
            />
        </div>
        </form>

        {error ? <p className="error">Please enter a value</p> : null}    

        <section className="section__radio">

        <div className="option__radio">

       
         <BtnOption />
                    
        </div>
    </section>           
                    
    </Container>
  )
}

export default Aside

