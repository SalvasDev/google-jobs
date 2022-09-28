import React from 'react'
import './header.css'
import styled from '@emotion/styled'

const Container = styled.div`
        width: min(95%, 1200px);
        margin: 3.2rem auto 4.2rem auto;
        
        .logo{
            margin-bottom: 3.2rem;
            font-size: 2.4rem;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            color: var(--balck);

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
        }

         .search__header:focus-within span {
            color: var(--bluedark) ;
        }


`;


const Header = () => {
  return (
    <Container>
        <h1 className="logo">Google<span> jobs</span></h1>
        <form >
            <div className="header">
                <div className="search__header">
                    <div className='icon__job'>
                        <span className="material-symbols-outlined">work </span>
                    </div>
                        <div className="inp__search">
                            <input 
                                type='text'
                                name='search'
                                id='search'
                                className= 'inpser' 
                                placeholder='Title or companies'
                            />                    
                        </div>
                        <div className="button__search">
                             <button>Search</button>
                        </div>
                </div>
            </div>        
        </form>
    </Container>
  )
}

export default Header
