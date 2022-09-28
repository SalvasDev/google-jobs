import React from 'react'
import logo from '../img/logo.webp'
import Footer from './Footer';
import styled from '@emotion/styled'

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
    }


    .contact {
        font-family: var(--font__prim);
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bluedark);
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
      align-items: center;
      font-size: 1.2rem;
      font-family: var(--font__sec);
      font-weight: 500;
      color: var(--graymed);

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
    } 

   
`;

const DetailJob = () => {
  return (
    <Container>
        <h1 className="logo">Google<span> jobs</span></h1>
        <div className="container__job">
            <div className="aside__job">
                 <button className="btn__back">
                    <span className="material-symbols-rounded"> trending_flat</span>
                    Back to search
                </button>
                
                <h3 className="how">How to Apply</h3>    
                
                <p className="contact">Please email a copy of your resume and online portfolio to <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span></p>

            </div>


            <div className="main__job">
                <div className="title__job">
                    <span className="name__job">Front-End Software Engineer</span>
                    <span className="full__time">Full time</span>
                </div>
                
                <div className="date">
                <span className="material-symbols-outlined"> schedule </span>
                  <p>5 days ago</p>
                </div>
                
                <div className="group__company">
                    
                    <img src={logo} alt="" />

                    <div className="info__company">
                        <span className="name__company">InnoCaption</span>
                        <div className="city">
                            <span className="material-symbols-outlined">public </span>     
                            <p>New York</p>
                        </div>                       
                    </div>
                </div>

                <p className="description__job">Humanizing Digital Experiences® <br/> <br/>

                Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand. <br/> <br/>

                Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance. <br/> <br/>

                This position<br/> <br/>

                We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools. <br/> <br/>

                What you’ll be doing<br/> <br/>

                Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position. <br/> <br/>

                3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus.  <br/> <br/>

                What we offer:  <br/> <br/>

                Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks.  <br/> <br/>

                Location - NYC, Flatiron District  <br/> <br/>

                We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.</p>
            </div>

        </div>

        <Footer author='Salvador Sánchez'/>


        
    </Container>
  )
}

export default DetailJob
