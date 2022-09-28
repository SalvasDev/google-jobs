import React from 'react'
import styled from '@emotion/styled'
import Card from './Card';
import { useJobsPrim } from './hooks/useJobsPrim';

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

`;


const Listcards = () => {

// const { jobs } = useJobsPrim()


  return (
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
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
