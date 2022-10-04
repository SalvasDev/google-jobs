import React, {useContext} from 'react'
import IdContext from './context/IdContext';
import styled from '@emotion/styled'

const Container = styled.div`
    width: 100%;
    height: 114px;
    background-color: var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.2rem;
    cursor: pointer;


      @media (max-width: 1170px) {
        height: 140px;
      }

      @media (max-width: 860px){
        width: 95%;
      }

      @media (max-width: 768px){
        margin-top: 3rem;
        width: 100%;
      }

      @media (max-width: 552px){
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          padding-top: 3rem;
          height: 200px;
       }


      .row__info {
        display: flex;
        height: 100%;
 
      }



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

   .full {
      display: inline;
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
      align-self: flex-end;
      align-content: end;
      margin-right: 1rem;
      margin-left: auto;
      font-family: var(--font__sec);
      vertical-align: middle;
      color: var(--graymed);
      font-size: 1.2rem;
      font-weight: 500;

      

      @media (max-width: 1170px) {
        flex-direction: column;
        align-items: end;
        margin-right: 1rem;
        margin-left: auto;
        justify-content: space-between;
      }

      @media (max-width: 552px){
          display: flex;
          flex-direction: row;
          align-content: flex-start;
          margin-left: auto;
          margin-right: 1rem;
          margin-top: -2rem;
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

    .city {
      display: flex;
      /* align-items: center; */
      margin-right: 1rem;    
      
        @media (max-width: 1170px) {
        align-self: end;
        margin-right: 0;
        margin-left: auto;
        text-align: right;

      }

    }

    .city span {
      margin-right: 8px;

    }

    .date {
      display: flex;
      /* align-items: center; */
      
      @media (max-width: 1107px) {
        align-self: end;
        margin-right: 0;
        margin-left: auto;
        text-align: right;
      }

    }

    .date span {
      margin-right: 8px;
    }


    

  `;



const Card = ({setShowDetail, location, companyLogo, companyName, id, jobType, publicDate, title}) => {

const { setIdJob } = useContext(IdContext)


const handleClick = (e)  => {
  e.preventDefault()
  setIdJob(id)
  setShowDetail(true)
}

var dateInit = new Date(publicDate).getTime()
var dateEnd    = new Date().getTime()
var dif = dateEnd - dateInit
var numdays = Math.round(dif/(1000*60*60*24))

  return (
    <Container onClick={ e => handleClick(e)}>
      <div className="row__info"> 
        <img src={companyLogo} alt="" />
       
        <div className="information" >
            <h4 className="company">{companyName}</h4>
            <h2 className="position">{title}</h2>
            <div className="full">
              {jobType === 'full_time' ? <span className="full__time">Full time</span> : jobType !== '' ? <span className="full__time">{jobType}</span> : null }
            </div>          
        </div>
      </div>
         <div className="citydate">
                
                { (!location) ? null : ( 
                <div className="city">                      
                  <p> <span className="material-symbols-outlined">public </span>  {location}</p>                                   
                 </div>
                )} 

                <div className="date">                
                  <p> <span className="material-symbols-outlined"> schedule </span>{numdays} days ago</p>
                </div>

            </div>
    </Container>   
  )
}

export default Card
