import React, { useRef } from 'react'
import logo from '../assets/logo_black.svg'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const ref = useRef(null)

  let lastScroll = 0
  window.onscroll = () => {
    const st = window.scrollY
    if(st > lastScroll) {
      ref.current.classList.add("hide")
      ref.current.classList.remove("show")
    }
    else {
      if(window.pageYOffset > 400) {
        ref.current.classList.add("show")
        ref.current.classList.remove("hide")
      }
      else {
        ref.current.classList.add("hide")
        ref.current.classList.remove("show")
      }
    }
    lastScroll = st
  }

  return (
    <div className='bg-secondary text-light mt-10'>
      <div className='container pt-5'>
        <div>
          <img src={logo} width={200} alt="CONFRINGO" />
        </div>
        <div className='mt-5 row'>
          <ul className='col-12 col-md-6 mt-5 list-unstyled'>
            <li><Link to="/">Services</Link></li>
            <li className='mt-3'><Link to="/">Products</Link></li>
            <li className='mt-3'><Link to="/">Career</Link></li>
            <li className='mt-3'><Link to="/">About</Link></li>
          </ul>
          <div className='col-12 col-md-6 mt-5'>
            <h5 className='fw-bold'>Join the newsletter and read the new posts first</h5>
            <div className='text-muted'>Subscribe now and recieve exclusive content and updates on our new products. Our newsletter is sent once a month, every first day.</div>
            <form method='post' className='row mt-2'>
              <div className='col-md-8'>
                <div className="input-group">
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className='col-md-4'> 
                <div type="submit" className='mt-3 mt-md-0 btn btn-primary'>Subscribe</div>
              </div>
            </form>
          </div>
        </div>
        <hr className='mt-5' />
        <div className='row flex-row-reverse d-flex align-items-center justify-content-center'>
          <div className='col-md-auto mb-4 mt-3 d-flex align-items-center justify-content-center'>
            <a className="followLink" href='https://facebook.com/confringo_co/' target='_blank' rel='noreferrer'><FiFacebook /></a>
            <a className="ms-4 followLink" href='https://www.instagram.com/confringo_co/' target='_blank' rel='noreferrer'><FiInstagram /></a>
            <a className="ms-4 followLink" href='https://www.linkedin.com/company/confringo/' target='_blank' rel='noreferrer'><FiLinkedin /></a>
            <a className="ms-4 followLink" href='https://twitter.com/confringo_co/' target='_blank' rel='noreferrer'><FiTwitter /></a>
          </div>
          <div className='col text-center text-md-start text-muted'>&copy; CONFRINFGO {new Date().getFullYear()} | All right reserved.</div>
        </div>
      </div>
      <div className="toTop btn btn-primary" ref={ref} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Top &#8599;</div>
    </div>
  )
}

export default Footer
