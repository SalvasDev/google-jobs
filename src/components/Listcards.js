import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import BtnPage from './BtnPage';
import JobsContext from  './context/JobsContext'
import PagesContext from './context/PagesContext'
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

  @media (max-width: 860px){
      width: 95%;
      margin-right: 3rem;
   }

  @media (max-width: 768px){
      width: 100%;
      margin-right: 0;
      margin-left: auto;
      justify-content: end;
  }

 @media (max-width: 552px){
    flex-wrap: wrap;
    row-gap: 1rem;
  }

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
  cursor: pointer;

  &:hover {
    background-color: var(--bluerey);
    border: none;

  &:hover span {
    color: white;
  }  

  }


}

.previous span {
  margin-top: 15%;
  margin-left: 20%;
  color: var(--graymed);
}

.next span {
  vertical-align: middle;
  text-align: center;
  color: var(--graymed);

}


.pag span {
  font-size: 1.4rem; 
  vertical-align: middle;
  color: var(--graymed)
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

const { jobs, consult } = useContext(JobsContext)
const [ totalpages,  setTotalPages ] = useState(1)
const [ createbtns, setCreatebtns ] = useState([])
const { numInit, setNumInit, numEnd, setNumEnd, setSelected, pagecurrent, setPageCurrent } = useContext(PagesContext)


 
let cardsForPage = 5 
var calcTotpages = Math.ceil(jobs.length / cardsForPage  )
 
var createBtns = []
var totp = totalpages
var numButton = 0 


  useEffect( () => {  
    setTotalPages(calcTotpages)
    
    while ( numButton < totp ) {
        numButton ++
        createBtns.push(numButton)              
    }
    setCreatebtns(createBtns)

  }, [jobs] )


  // Set previous page
  const previousPage = () => {
    let newCurrentPage = pagecurrent - 1  

    if (newCurrentPage === 0 ) return
    setPageCurrent(newCurrentPage)

    let numend = newCurrentPage * 5
    let numinit = numend - 5

    setNumEnd(numend)
    setNumInit(numinit) 

    const actualPage = {
     selec : true,
     pageSelected : newCurrentPage      
    }
    
    setSelected( actualPage )

  } 


   // Set next page
  const nextPage = () => {

    let newCurrentPage = pagecurrent + 1  

    if (newCurrentPage > totalpages ) return
    setPageCurrent(newCurrentPage)

    let numend = newCurrentPage * 5
    let numinit = numend - 5

    setNumEnd(numend)
    setNumInit(numinit) 
    
    const actualPage = {
      selec : true,
     pageSelected : newCurrentPage      
    }
    
    setSelected( actualPage )

  } 
 
  var i = numInit

  return (
    <Container>

      {jobs.length === 0 && consult === false ? <p className="error">We did not find any results 😩 , please try again 😀 !!! </p> : null}    

       { jobs.slice(numInit, numEnd).map((job) => {
        
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
          
          { (pagecurrent === 1 )  ? null : (
             <button
             className="previous"
             onClick={previousPage}
          >
             <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>  
          )}

          {/* Show page buttons   */}
          { totalpages === 1 ? null  : (
           createbtns.map((contInd) => {
                return  <BtnPage 
                  key = {contInd.toString()}
                  numPage = {contInd}
                  setPageCurrent = {setPageCurrent}
                 />
              })            
            ) 
          }
          
          { (pagecurrent === totalpages) ? null : (
              <button 
              className="next"
              onClick={nextPage}
            >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          )}

        </div>

    </Container>
  )
}

export default Listcards
