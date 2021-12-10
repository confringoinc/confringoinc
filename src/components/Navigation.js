import React from 'react'
import logo from '../assets/logo.svg'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Navigation = () => {

  const handleNav = (e) => {
    e.preventDefault();
    if (document.getElementById('navContent').classList.contains('open')) {
      document.getElementById('navContent').classList.remove('show');
      document.getElementById('navContent').classList.remove('open');
      document.getElementById('navbarToggler').classList.remove('open');
      document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    }
    else {
      document.getElementById('navContent').classList.add('show');
      document.getElementById('navContent').classList.add('open');
      document.getElementById('navbarToggler').classList.add('open');
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><img className='img-fluid' src={logo} alt="CONFRINGO" width={200} /></Link>
        <button className="navbarToggler d-lg-none" onClick={handleNav} type="button" aria-label="MENU">
            <div id="navbarToggler">
              <span></span>
              <span></span>
            </div>
          </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav my-3 ms-auto d-flex align-items-center">
            <li className="nav-item ms-md-4"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item ms-md-4"><Link className="nav-link" to="/">Services</Link></li>
            <li className="nav-item ms-md-4"><Link className="nav-link" to="/">Products</Link></li>
            <li className="nav-item ms-md-4"><Link className="nav-link" to="/">Career</Link></li>
            <li className="nav-item ms-md-4"><Link className="nav-link" to="/">About</Link></li>
            <li className="nav-item ms-md-5 mt-5 mt-md-0"><Link className="btn btn-primary" to="/">Contact us</Link></li>
          </ul>
          <div className='position-fixed bottom-1 right-0 left-0 w-100 d-flex align-items-center justify-content-center d-md-none mt-4'>
            <a className='followLink bg-light text-muted' href='https://facebook.com/confringo_co' target='_blank' rel='noreferrer'><FiFacebook /></a>
            <a className="followLink bg-light text-muted ms-2" href='https://www.instagram.com/confringo_co/' target='_blank' rel='noreferrer'><FiInstagram /></a>
            <a className="followLink bg-light text-muted ms-2" href='https://www.linkedin.com/company/confringo/' target='_blank' rel='noreferrer'><FiLinkedin /></a>
            <a className="followLink bg-light text-muted ms-2" href='https://twitter.com/confringo_co' target='_blank' rel='noreferrer'><FiTwitter /></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
