import React, { useEffect, useState, useContext } from 'react'
import './header.css'
import JobsContext from  './context/JobsContext'
import PagesContext from './context/PagesContext'
import getJobsPrim from '../services/getJobsPrim'
import styled from '@emotion/styled'

const Container = styled.div`
        width: min(95%, 1200px);
        margin: 3.2rem auto 4.2rem auto;    
        max-width: 100%;

        
        .header {
            @media (max-width: 820px) {
               max-width: 100%
            }
        }
      

            
        .logo{
            margin-bottom: 3.2rem;
            font-size: 2.4rem;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            color: var(--balck);
            text-decoration: none;
            cursor: pointer;

            span {
                font-weight: 300;
            }
        }

        .search__header {
            height: 5.5rem;
            background-color: var(--white);
            width: 70%;
            margin: 0 auto;
            border-radius: 4px;
            display: flex;
            flex-direction: row;
            align-items: center;
            column-gap: 1rem;   
        }

        

        .inp__search {
            display:flex;
            width: 80%;
            height: 85%;

                input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background-color: transparent;
                    color: gray;
                    outline: none;
                    font-family: var(--font__sec);
                    font-size: 1.4rem;

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
        margin-left: 2rem;
        color: var(--graymed);
        font-size: 2rem;
        vertical-align: middle;
        font-variation-settings:
            'FILL' 0,
            'wght' 600,
            'GRAD' 0,
            'opsz' 48
        }
        
        .button__search {
            height: 85%;
            width: 20%;
            margin-right: .5rem;
        }       

        button {
            background-color: var(--bluerey);
            color: var(--white);
            height: 100%;
            border: none;
            width: 100%;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1.4rem;

            &:hover {
                background-color: blue;
            }            
        }

         .search__header:focus-within span {
            color: var(--bluedark) ;
        }

        .error {
            color: #EA8282;
            border-radius: 12px;
            margin-bottom: 2rem;
            text-align: center;
            font-size: 1.8rem;
            font-family: var(--font__prim);           
            }

`;


const Header = () => {

const { setNumInit, setNumEnd, setSelected, setPageCurrent } = useContext(PagesContext)
const [ search, setSearch ] = useState('')
const [ error, setError ] = useState(false)
const { setJobs, consult, setConsult } = useContext(JobsContext)


useEffect( () => {
    //Reset list jobs cards
    setNumInit(0)
    setNumEnd(5) 
    
    // Reset to the current page
    const actualPage = {
    selec : true,
    pageSelected : 1      
    }    
    
    setSelected( actualPage )    

    setPageCurrent(1)   

    getJobsPrim( consult, search, setConsult ).then(jobsconsult => setJobs(jobsconsult))
},[consult])


    // Function for set items into state
    const handleChange = e => {
        setSearch(e.target.value)        
    }


    // When user click subtmit on form
    const handleSubmit = e => {
        e.preventDefault()
        if (search.trim() === '') {
            setError(true)
            return;
        }
        setError(false)
        setConsult(true)
    }



  return (
    <Container>
        <a href="/" className="logo">
            <h1 className="logo">Remo<span> jobs</span></h1>
        </a>
       
        <form 
            onSubmit={handleSubmit}
        >
            <div className="header">
                <div className="search__header">
                    <div className='icon__job'>
                        <span className="material-symbols-outlined">work </span>
                    </div>
                        <div className="inp__search">
                            <input 
                                type='text'
                                name='search'
                                id={search}
                                className= 'inpser' 
                                placeholder='Title or companies'
                                onChange={handleChange}
                            />                    
                        </div>
                        <div className="button__search">
                             <button>Search</button>
                        </div>
                </div>
            </div> 
            {error ? <p className="error">Please enter a value</p> : null}    
        </form>
    </Container>
  )
}

export default Header


