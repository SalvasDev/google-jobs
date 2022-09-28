import React from 'react'
import logo from '../img/logo.webp'
import styled from '@emotion/styled'

const Container = styled.div`
    width: 100%;
    height: 11.4rem;
    background-color: var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.2rem;

    img {
        height: 100%;
        border-radius: 4px;        
    }

    .information {
      margin-left: 1.6rem;
      margin-top: 0;
      height: 100%;
    }

    .company {
      margin-top: 0;
      font-family: var(--font__sec);
      font-size: 1.2rem; 
      font-weight: 700;
      margin-bottom: .8rem;
  
    }

    .position {
      margin-top: 0;
      margin-bottom: 1.8rem;
      font-family: var(--font__sec);
      font-size: 1.8rem; 
      font-weight: 400;

    }


  .full__time {
    font-family: var(--font__sec);
    font-size: 1.2rem;   
    padding: .4rem;
    border: 1px solid var(--bluedark); 
    border-radius: 4px;
    font-weight: 500;
  }  



    .citydate {
      display: flex;
      justify-self: end;
      align-self: end;
      margin-right: 1rem;
      margin-left: auto;
      font-family: var(--font__sec);
      vertical-align: middle;
      color: var(--graymed);
      font-size: 1.2rem;
      font-weight: 500;

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

    .city {
      display: flex;
      align-items: center;
      margin-right: 2.8rem;           
    }

    .city span {
      margin-right: 8px;
    }

    .date {
      display: flex;
      align-items: center;
    }

    .date span {
      margin-right: 8px;
    }


`;



const Card = () => {
  return (
    <Container>
        <img src={logo} alt="" />

        <div className="information">
            <h4 className="company">Innocaption</h4>
            <h2 className="position">Finance Director</h2>
            <div className="full">
              <span className="full__time">Full time</span>
            </div>          
        </div>

         <div className="citydate">
                <div className="city">
                  <span className="material-symbols-outlined">public </span>     
                  <p>New York</p>
                </div>
                
                <div className="date">
                 <span className="material-symbols-outlined"> schedule </span>
                  <p>5 days ago</p>
                </div>

            </div>
    </Container>
  )
}

export default Card
