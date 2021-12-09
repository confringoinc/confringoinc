import React from 'react'
import logo from '../assets/logo.svg'

const Loader = () => {
  return (
    <h1 className="vh-100 d-flex justify-content-center align-items-center">
      <img className='img-fluid' src={logo} alt="CONFRINGO" width={220} />
    </h1>
  )
}

export default Loader