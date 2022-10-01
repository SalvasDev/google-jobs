import React, { useContext } from 'react'
import Card from './Card';
import JobsContext from  './context/JobsContext'
import styled from '@emotion/styled'


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;


.index {
  display: flex;
  column-gap: 1.2rem;
  font-family: var(--font__sec);
  color: var(--graymed);
  margin: 0 0 0 auto;
}

.previous,
.pag,
.next {
  width: 3.6rem;
  height: 3.6rem;
  border: 1px solid var(--graymed);
  background-color: transparent;
  border-radius: 4px;
  text-align: center;
  justify-items: center;
}

.previous span {
  margin-top: 15%;
  margin-left: 15%;
}

.next span {
  margin-top: 15%;
  margin-left: 10%;
}

.pag {
  padding-top: 1rem;
}
.pag span {
  font-size: 1.2rem; 
}

 .error {
            color: #EA8282;
            border-radius: 12px;
            margin-bottom: 2rem;
            text-align: left;
            font-size: 1.8rem;
            font-family: var(--font__prim);
            
            
    }

`;


const Listcards = ({setShowDetail}) => {

const { jobs } = useContext(JobsContext)

  var i = 0

  return (
    <Container>
      { console.log('dentro de lista') }
      {console.log(jobs) }

      {jobs.length === 0 ? <p className="error">We did not find any results 😩 , please try again 😀 !!! </p> : null}    

       { jobs.slice(0, 5).map((job) => {
        
        i = i + 1;            

        var { candidate_required_location, company_logo, company_name, id, job_type, publication_date, title} = jobs[i-1] || {}       

        return <Card
              key = {i.toString()}
              setShowDetail = {setShowDetail}
              companyLogo = {company_logo}
              location = {candidate_required_location}
              companyName = {company_name}
              id = {id}
              jobType = {job_type}
              publicDate = {publication_date}
              title = {title}
            />

        })
       }       
  
        
        <div className="index">
          
          <div className="previous">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          
          <div className="pag">
            <span>1</span>
          </div>
          
          <div className="pag">
            <span>2</span>
          </div>
          
          <div className="next">
           <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>

        </div>

    </Container>
  )
}

export default Listcards
