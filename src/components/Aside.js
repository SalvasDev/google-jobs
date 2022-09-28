import React from 'react'
import styled from '@emotion/styled'

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

      h1 {
        font-family: var(--font__prim);
        font-weight: 700;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: var(--graymed);
        margin-top: 3rem;
        margin-bottom: 1.4rem;
      }
 
`;


const Aside = () => {
  return (
    <Container>

       <label className="lab__full"> <input type="checkbox" className="check__full"/>
            Full time
        </label>
        
        <h1>Location</h1>

        <div className="inp_several">          
            <span className="material-symbols-outlined">public </span>        
            <input className='input_country'  type="text" placeholder='Country'/>
        </div>

        <section className="section__radio">

           <div className="option__radio">

            <label className="lab__radio">
            <input name="country_radio" value="usa" type="radio" className="input__radio"/>
            USA</label>

             <label className="lab__radio">
            <input name="country_radio" value="canada" type="radio" className="input__radio"/>
            Canada</label>

            <label className="lab__radio">
            <input name="country_radio" value="spain" type="radio" className="input__radio"/>
            Spain</label>

            <label className="lab__radio">
            <input name="country_radio" value="germany" type="radio" className="input__radio"/>
            Germany</label>
            
           </div>

        </section>    

       
                    
    </Container>
  )
}

export default Aside
