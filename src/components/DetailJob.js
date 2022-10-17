import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import IdContext from './context/IdContext';
import Footer from './Footer';
import styled from '@emotion/styled'
import getOneJob from '../services/getOneJob';
import Loading from './Loading';

const Container = styled.div`
    width: min(95%, 1200px);
    margin: 3.2rem auto 4.2rem auto;

     .logo {
            margin-bottom: 3.2rem;
            font-size: 2.4rem;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            color: var(--balck);

            span {
                font-weight: 300;
            }
        }

    .container__job {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 20% 1fr;
        column-gap: 7.7rem;

        @media (max-width: 768px){
            display: flex;
            flex-direction: column;
            row-gap: 7rem;
            margin-top: 3rem;          
      }

    }

    .btn__back {
        display: flex;
        align-items: center;
        color: var(--bluerey);
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-family: var(--font__prim);
        font-size: 1.4rem;
    }


    .btn__back span {
        margin-right: 1rem;
        transform: rotate(180deg);       
    }


    
    .material-symbols-rounded {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48
    }

    .how {
        font-family: var(--font__sec);
        font-weight: 700;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: var(--graymed);
        margin-top: 2rem;
    }


    .contact {
        font-family: var(--font__prim);
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bluedark);
        margin-top: 2rem;
    }


    .contact span {
        color: var(--bluerey);
    }


    ///////////////////////////////
    
    .main__job {
        width: 100%;
        height: 100%;
    }

    .title__job {
        display: flex;
        align-items: center; 
        
           @media (max-width: 427px){
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem; 
            align-items: flex-start;
            row-gap: 1rem;
      }
    }

    .name__job {
        font-size: 2.4rem;
        font-family: var(--font__sec);
        font-weight: 700;
        color: var(--bluedark);
        margin-right: 1.7rem;
    }

    .full__time {
        font-family: var(--font__sec);
        font-size: 1.2rem;   
        padding: .4rem;
        border: 1px solid var(--bluedark); 
        border-radius: 4px;
        font-weight: 500;
        color: var(--bluedark); 
    }

    .date {
      display: flex;
      font-size: 1.2rem;
      font-family: var(--font__sec);
      font-weight: 500;
      color: var(--graymed);
      align-items: center;

    }

    .date span {
      margin-right: 8px;
    }


    .material-symbols-outlined {
        margin-top: 0;
        margin-left: 0;
        color: var(--graymed);
        font-size: 1.5rem;
        vertical-align: middle;
        font-variation-settings:
            'FILL' 0,
            'wght' 600,
            'GRAD' 0,
            'opsz' 48
    }

      img {
        height: 5rem;
        width: 5rem;
        border-radius: 4px; 
        margin-right: 1.2rem;        
    }

    .group__company {
        margin-top: 3.5rem;
        display: flex;
    }

    .info__company {
        display: flex;
        flex-direction: column;  
    }
    
    .name__company {
        font-family: var(--font__sec);
        font-weight: 700;
        color: var(--bluedark);
        font-size:  1.8rem;  
    }

    .city {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-family: var(--font__sec);
      font-weight: 500;
      color: var(--graymed); 
      margin-top: 1rem;
    }

    .city span {
      margin-right: 8px;
    }

    .city p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .description__job {
        font-family: var(--font__sec);
        font-size: 1.6rem;
        color: var(--bluedark);
        font-weight: 400;
        margin-top: 3.2rem;
    } 

    .btn__aply {
        width: 100%;
        height: 4.8rem;
        background-color: var(--bluerey);
        color: white;
        font-family: var(--font__sec);
        font-weight: 500;
        font-size: 1.6rem;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        margin-top: 2rem;
       
        &:hover {
            background-color: blue;      
        }

        .url__aply {
            color: white;
            text-decoration: none;
        }

        @media (max-width: 768px){
          width: 70%;          
      }

    }

   
`;

const DetailJob = ({ setShowDetail, handleForce }) => {

    const { idJob } = useContext(IdContext)
    const [oneJob, setOneJob] = useState([])
    const [loading, setLoading] = useState(true)


    const handleClick = (e) => {
        e.preventDefault()
        handleForce()
        setShowDetail(false)

    }


    useEffect(() => {
        getOneJob(idJob).then(jobsconsult => setOneJob(jobsconsult))
        setLoading(false)
    }, [idJob])


    var { candidate_required_location, company_logo, company_name, job_type, publication_date, title, url, description } = oneJob || {}

    var jobType = job_type
    var publicDate = publication_date

    var dateInit = new Date(publicDate).getTime()
    var dateEnd = new Date().getTime()
    var dif = dateEnd - dateInit
    var numdays = Math.round(dif / (1000 * 60 * 60 * 24))

    var urlCompany = url

    var htmlContent = { __html: description };

    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <Container>
                <h1 className="logo">Remo<span> jobs</span></h1>
                <div className="container__job">
                    <div className="aside__job">
                        <button onClick={e => handleClick(e)} className="btn__back">
                            <span className="material-symbols-rounded">trending_flat</span>
                            Back to search
                        </button>

                        <h3 className="how">How to Apply</h3>

                        <p className="contact">Please visit de next page for more information</p>
                        <a className="url__aply" href={urlCompany} target="_blank" rel="noopener noreferrer">  <button className="btn__aply">Aply</button></a>

                    </div>


                    <div className="main__job">
                        <div className="title__job">
                            <span className="name__job">{title}</span>
                            {jobType === 'full_time' ? <span className="full__time">Full time</span> : jobType !== '' ? <span className="full__time">{jobType}</span> : null}
                        </div>

                        <div className="date">
                            <span className="material-symbols-outlined"> schedule </span>
                            <p>{numdays} days ago</p>
                        </div>

                        <div className="group__company">

                            <img src={company_logo} alt="" />

                            <div className="info__company">
                                <span className="name__company">{company_name}</span>
                                <div className="city">
                                    <span className="material-symbols-outlined">public </span>
                                    <p>{candidate_required_location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="description__job" dangerouslySetInnerHTML={htmlContent} />
                    </div>

                </div>

                <Footer author='Salvador Sánchez' />

            </Container>
        )
    }
}
export default DetailJob





