import React from 'react'
import moment from 'moment';
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
    cursor: pointer;

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



const Card = ({setShowDetail, location, companyLogo, companyName, id, jobType, publicDate, title}) => {

const handleClick = (e)  => {
  e.preventDefault()
  setShowDetail(true)
}


  // var date =  publicDate;
  // var nowMoment = moment().format('DD/MM/YYYY');
  // var date = moment().format('YYYY/MM/DD')
  // var dif = date.dif(moment({publicDate}))
  // var numdays = Math.ceil(dif / 86400000)
  // var Date =  new Date().getTime();


var fechaInicio = new Date(publicDate).getTime()
var fechaFin    = new Date().getTime()
var dif = fechaFin - fechaInicio
var numdays = Math.round(dif/(1000*60*60*24))



  return (
    <Container onClick={ e => handleClick(e)}>
        <img src={companyLogo} alt="" />
       
        <div className="information" >
            <h4 className="company">{companyName}</h4>
            <h2 className="position">{title}</h2>
            <div className="full">
              {jobType === 'full_time' ? <span className="full__time">Full time</span> : null }
            </div>          
        </div>

         <div className="citydate">
                <div className="city">
                  <span className="material-symbols-outlined">public </span>     
                  <p>{location}</p>
                </div>
                
                <div className="date">
                 <span className="material-symbols-outlined"> schedule </span>
                  <p>{numdays} + days ago</p>
                </div>

            </div>
    </Container>   
  )
}

export default Card
