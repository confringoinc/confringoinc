import React, { useRef } from 'react'
import logo from '../assets/logo_black.svg'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const ref = useRef(null)

  window.onscroll = () => {
    if(window.pageYOffset > 400) {
      ref.current.classList.add("show")
      ref.current.classList.remove("hide")
    }
    else {
      ref.current.classList.add("hide")
      ref.current.classList.remove("show")
    }
  }

  return (
    <div className='bg-secondary text-light mt-10'>
      <div className='container pt-5'>
        <div>
          <img src={logo} width={220} alt="CONFRINGO" />
        </div>
        <div className='mt-5 row'>
          <ul className='col-12 col-md-6 mt-5 list-unstyled'>
            <li><a href="/">Services</a></li>
            <li className='mt-3'><a href="/">Products</a></li>
            <li className='mt-3'><a href="/">Career</a></li>
            <li className='mt-3'><a href="/">About</a></li>
          </ul>
          <div className='col-12 col-md-6 mt-5'>
            <h5 className='fw-bold'>Join the newsletter and read the new posts first</h5>
            <div className='text-muted'>Subscribe now and recieve exclusive content and updates on our new products. Our newsletter is sent once a month, every first day.</div>
            <div className='row mt-2'>
              <div className='col-md-8'>
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className='col-md-4'> 
                <div className='mt-3 mt-md-0 btn btn-primary'>Subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-5' />
        <div className='row flex-row-reverse d-flex align-items-center justify-content-center'>
          <div className='col-md-auto mb-4 mt-3 d-flex align-items-center justify-content-center'>
            <a className="followLink" href='https://dribbble.com/patelhit125' target='_blank' rel='noreferrer'><FiFacebook /></a>
            <a className="ms-4 followLink" href='https://www.instagram.com/patelhit125/' target='_blank' rel='noreferrer'><FiInstagram /></a>
            <a className="ms-4 followLink" href='https://www.linkedin.com/in/patelhit125/' target='_blank' rel='noreferrer'><FiLinkedin /></a>
            <a className="ms-4 followLink" href='https://twitter.com/patelhit125' target='_blank' rel='noreferrer'><FiTwitter /></a>
          </div>
          <div className='col text-center text-md-start text-muted'>&copy; CONFRINFGO {new Date().getFullYear()} | All right reserved.</div>
        </div>
      </div>
      <div className="toTop btn btn-primary" ref={ref} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Top &#8599;</div>
    </div>
  )
}

export default Footer
