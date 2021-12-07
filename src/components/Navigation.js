import React from 'react'
import logo from '../assets/logo.svg'

const Navigation = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/"><img className='img-fluid' src={logo} alt="CONFRINGO" width={220} /></a>
        <button className="navbarToggler d-lg-none" type="button" aria-label="MENU">
            <div id="navbarToggler">
              <span></span>
              <span></span>
            </div>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav my-3 ms-auto d-flex align-items-center">
            <li className="nav-item ms-4"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item ms-4"><a className="nav-link" href="/">Services</a></li>
            <li className="nav-item ms-4"><a className="nav-link" href="/">Products</a></li>
            <li className="nav-item ms-4"><a className="nav-link" href="/">Career</a></li>
            <li className="nav-item ms-4"><a className="nav-link" href="/">About</a></li>
            <li className="nav-item ms-5"><a className="btn btn-primary" href="/">Contact us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
