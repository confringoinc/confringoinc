import React from 'react'
import banner1 from '../assets/banner_1.svg'

const Home = () => {
  return (
    <div className='mt-5 container'>
      <div className='row flex-row-reverse d-flex justify-content-center align-items-center'>
        <div className='col-12 col-md-6 mt-3'>
          <img className='img-fluid' src={banner1} alt="Confringo - Work together" />
        </div>
        <div className='col-12 col-md-6 mt-3'>
          <h1 className='fw-bold'>Your next big idea starts here. Confringo is a conglomerate.</h1>
          <div className='text-muted'>
          We provide services in different domains. We are a simple startup BY STUDENTS FOR STUDENTS! Confringo is purely committed to excellence. Excellence of STUDENTS, SOCIETY and EVERYONE around.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
