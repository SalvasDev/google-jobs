import React, { Fragment } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



const Home = ({ setShowDetail, handleForce }) => {



  return (
    <Fragment>
      <Header />
      <Main
        setShowDetail={setShowDetail}
        handleForce={handleForce}
      />
      <Footer author='Salvador Sánchez' />
    </Fragment>
  )
}

export default Home
