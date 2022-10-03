import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from '@emotion/styled'

const Container = styled.div`
`;

const Home = ({setShowDetail, handleForce}) => {



  return (
    <Container>
        <Header />       
        <Main
        setShowDetail = {setShowDetail}
        handleForce = {handleForce}
        />
        <Footer author='Salvador Sánchez'/>
    </Container>
  )
}

export default Home




















/// por si se requiere utilizar select de categorias

// eslint-disable-next-line no-lone-blocks
{/* <div className="button__search">
                             <select
                                name='category'
                                id='category'    
                                value='category'                            
                             >
                            <option value="" key="">Category</option>

                                <option value="software-dev" key='19'>Software Development</option>
                                <option value="customer-support" key='18'>Customer Service</option>
                                <option value="design" key='21'>Design</option>
                                <option value="marketing" key='28'>Marketing</option>
                                <option value="sales" key='18'>Sales</option>
                                <option value="product" key='23'>Product</option>
                                <option value="business" key='33'>Business</option>
                                <option value="data" key='24'>Data</option>
                                <option value="devops" key='25'>DevOps / Sysadmin</option>
                                <option value="finance-legal" key='26'>Finance / Legal</option>
                                <option value="hr" key='27'>Human Resources</option>
                                <option value="qa" key='29'>QA</option>
                                <option value="writing" key='32'>Writing</option>
                                <option value="all-others" key='22'>All others</option>
                                


                            </select>
                        </div> */}

