import React from 'react'
import styled from '@emotion/styled'
import Aside from './Aside';
import Listcards from './Listcards';

const Container = styled.div`
        width: min(95%, 1200px);
        margin: 3.2rem auto 4.2rem auto;
        display: grid;
        grid-template-columns: 33% 1fr;
        column-gap: 3rem;

        .aside {
          background-color: aqua;
          height: 30rem;
      }

        .content {
          background-color: beige;
          height: 30rem;

        }
`;


const Main = ({setShowDetail}) => {
  return (
    <Container>
        <Aside/>
        <Listcards
          setShowDetail = {setShowDetail}
        />    
     </Container>
  )
}

export default Main
