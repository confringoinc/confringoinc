import React from 'react'
import banner1 from '../assets/banner_1.svg'
import banner2 from '../assets/banner_2.svg'
import service1 from '../assets/webdevelopment.svg'
import service2 from '../assets/appdevelopment.svg'
import service3 from '../assets/webdesigner.svg'
import service4 from '../assets/graphicdesign.svg'
import service5 from '../assets/fullstack.svg'
import service6 from '../assets/marketing.svg'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { FiBox, FiPenTool, FiShield, FiUserCheck } from 'react-icons/fi'

const Home = () => {

  return (
    <div className='mt-5 container'>
      <div>
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
      <div>
        <div className="row d-flex justify-content-center align-items-center text-center mt-5 bg-secondary text-light p-5 rounded-pill">
          <div className="mt-4 col-12 col-lg-3">
            <div className="count-up">
              <p className="counter-count h1 text-primary fw-bold">200+</p>
              <h6>Happy Clients</h6>
            </div>
          </div>
          <div className="mt-4 col-12 col-lg-3">
            <div className="count-up">
              <p className="counter-count h1 text-primary fw-bold">30+</p>
              <h6>Projects</h6>
            </div>
          </div>
          <div className="mt-4 col-12 col-lg-3">
            <div className="count-up">
              <p className="counter-count h1 text-primary fw-bold">16</p>
              <h6>Rewards</h6>
            </div>
          </div>
          <div className="mt-4 col-12 col-lg-3">
            <div className="count-up">
              <p className="counter-count h1 text-primary fw-bold">4</p>
              <h6>Year of experience</h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='row mt-10'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={6}
            visibleSlides={Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768 ? 1 : 3}
            infinite={true}
            isPlaying={true}
            interval={3500}
          >
            <Slider className='mt-3 row'>
              <Slide index={0}>
                <div class="item me-3">
                  <img className='img-fluid rounded-4' src="https://unsplash.com/photos/aJYO8JmVodY/download?ixid=MnwxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE2MzkwNzI4Mjg&force=true&w=1920" alt="" />
                  <div class="overlay bottom-overlay rounded-4 d-flex align-items-end justify-content-end">
                    <div className='p-4'>
                      <h3 className='fw-bold'>First Project</h3>
                      <div>
                        Lorem ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div class="item me-3">
                  <img className='img-fluid rounded-4' src="https://unsplash.com/photos/cJWhVkruh7s/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2MzkwNzI4Mjg&force=true&w=1920" alt="" />
                  <div class="overlay bottom-overlay rounded-4 d-flex align-items-end justify-content-end">
                    <div className='p-4'>
                      <h3 className='fw-bold'>Second Project</h3>
                      <div>
                        Lorem ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div></Slide>
              <Slide index={2}>
                <div class="item me-3">
                  <img className='img-fluid rounded-4' src="https://unsplash.com/photos/L8iPhY86y5A/download?ixid=MnwxMjA3fDB8MXxhbGx8OXx8fHx8fDJ8fDE2MzkwNzI4Mjg&force=true&w=1920" alt="" />
                  <div class="overlay bottom-overlay rounded-4 d-flex align-items-end justify-content-end">
                    <div className='p-4'>
                      <h3 className='fw-bold'>Third Project</h3>
                      <div>
                        Lorem ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={3}>
                <div class="item me-3">
                  <img className='img-fluid rounded-4' src="https://unsplash.com/photos/cqMecmrVmoo/download?ixid=MnwxMjA3fDB8MXxhbGx8MTl8fHx8fHwyfHwxNjM5MDcyODI4&force=true&w=1920" alt="" />
                  <div class="overlay bottom-overlay rounded-4 d-flex align-items-end justify-content-end">
                    <div className='p-4'>
                      <h3 className='fw-bold'>Fourth Project</h3>
                      <div>
                        Lorem ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={4}>
                <div class="item me-3">
                  <img className='img-fluid rounded-4' src="https://unsplash.com/photos/T7nGkdpGdzk/download?ixid=MnwxMjA3fDB8MXxhbGx8MTd8fHx8fHwyfHwxNjM5MDcyODI4&force=true&w=1920" alt="" />
                  <div class="overlay bottom-overlay rounded-4 d-flex align-items-end justify-content-end">
                    <div className='p-4'>
                      <h3 className='fw-bold'>Fifth Project</h3>
                      <div>
                        Lorem ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={5}>
                <div class="item me-3">
                  <img className='img-fluid rounded-4' src="https://unsplash.com/photos/wMHZsFZg7oI/download?ixid=MnwxMjA3fDB8MXxhbGx8MjJ8fHx8fHwyfHwxNjM5MDcyODI4&force=true&w=1920" alt="" />
                  <div class="overlay bottom-overlay rounded-4 d-flex align-items-end justify-content-end">
                    <div className='p-4'>
                      <h3 className='fw-bold'>Sixth Project</h3>
                      <div>
                        Lorem ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      <div>
        <div className='mt-10'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='mt-5 col-12 col-md-5'>
              <img src={service1} alt="Web development" />
            </div>
            <div className='mt-5 col-12 col-md-7'>
              <h2 className='fw-bold'>Web Development</h2>
              <div className='text-muted'>
                Our team can provide a new or revamped website included with built-in SEO, improved performance, usability and accessibility. Optimization for mobile devices is a must-have for search engine rankings. Our team will make sure you stay on top of mobile. We are Web Core Vitals and Page Speed Experts.
              </div>
            </div>
          </div>
          <div className='row flex-row-reverse d-flex justify-content-center align-items-center'>
            <div className='mt-5 col-12 col-md-5'>
              <img src={service2} alt="App development" />
            </div>
            <div className='mt-5 col-12 col-md-7'>
              <h2 className='fw-bold'>App Development</h2>
              <div className='text-muted'>
                Bring your most complex mobile solutions to life with our full-cycle custom mobile app development company services.  Having built more mobile solutions for a varied set of industries, We are in a unique position to bring ideas from the whiteboard into the market through our services.
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='mt-5 col-12 col-md-5'>
              <img src={service3} alt="Web development" />
            </div>
            <div className='mt-5 col-12 col-md-7'>
              <h2 className='fw-bold'>Web Design</h2>
              <div className='text-muted'>
                Our web development involves developing the functionality and navigation of the basic website, graphics and finally, formatting and loading the content to the actual website. We provide an extensive, the best quality services and products along with flexible features which allow you to implement your own personal strengths and also in-house features to create customized websites.
              </div>
            </div>
          </div>
          <div className='row flex-row-reverse d-flex justify-content-center align-items-center'>
            <div className='mt-5 col-12 col-md-5'>
              <img src={service4} alt="App development" />
            </div>
            <div className='mt-5 col-12 col-md-7'>
              <h2 className='fw-bold'>UI/UX, Graphic Design</h2>
              <div className='text-muted'>
                A great design is one that has the potential to increase the user trust in your website and ultimately in your business. When design focuses on user experience and user interface, it delivers impressive results, contributing to a tremendous increase inconversion rate.
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='mt-5 col-12 col-md-5'>
              <img src={service5} alt="Web development" />
            </div>
            <div className='mt-5 col-12 col-md-7'>
              <h2 className='fw-bold'>Full-Stack Software Development</h2>
              <div className='text-muted'>
                Confringo specializes in software development across a full range of technologies, from front-end prototyping to a complete set of back-end services. Every business wants to set a faster pace for growth, and with our full-stack development services, you can achieve that momentum.
              </div>
            </div>
          </div>
          <div className='row flex-row-reverse d-flex justify-content-center align-items-center'>
            <div className='mt-5 col-12 col-md-5'>
              <img src={service6} alt="App development" />
            </div>
            <div className='mt-5 col-12 col-md-7'>
              <h2 className='fw-bold'>Marketing</h2>
              <div className='text-muted'>
                When we partner with our clients, we commit to delivering the highest-quality end result. Our skilled developers take care of client issues and queries with absolute dexterity. Having delivered successful projects across industries has given us the expertise to cater to every client requirement.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='row mt-10'>
          <div className='col-12 col-md-6'>
            <img src={banner2} alt="App development" />
          </div>
          <div className='col-12 col-md-6'>
            <ul className='list-unstyled'>
              <li className='mt-5 row'>
                <div className='col-auto'>
                  <FiPenTool className='fw-1 mt-1 text-primary' />
                </div>
                <div className='col'>
                  <h4 className='fw-bold'>Learning</h4>
                  <div className='text-muted'>
                    Learning is an integral part of life. Confringo focuses on that and provide best services.
                  </div>
                </div>
              </li>
              <li className='mt-5 row'>
                <div className='col-auto'>
                  <FiBox className='fw-1 mt-1 text-primary' />
                </div>
                <div className='col'>
                  <h4 className='fw-bold'>Integrity</h4>
                  <div className='text-muted'>
                    Confringo has been built upoun strong moral principles to serve it's users and add values to their growth.
                  </div>
                </div>
              </li>
              <li className='mt-5 row'>
                <div className='col-auto'>
                  <FiUserCheck className='fw-1 mt-1 text-primary' />
                </div>
                <div className='col'>
                  <h4 className='fw-bold'>Responsiblity</h4>
                  <div className='text-muted'>
                    Team confringo embrace opportunities to contribute and believes in achieving new milestones consistently.
                  </div>
                </div>
              </li>
              <li className='mt-5 row'>
                <div className='col-auto'>
                  <FiShield className='fw-1 mt-1 text-primary' />
                </div>
                <div className='col'>
                  <h4 className='fw-bold'>Trustworthy</h4>
                  <div className='text-muted'>
                    Confringo firmly believe in privacy and protection of client. Your data is safe with us.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className='d-flex justify-content-center align-items-center mt-10'>
          <div className='col-md-8 text-center'>
            <h2 className='fw-bold'>Stop wasting your valuable time to just thinking. Have an idea? Tell us about it.</h2>
            <div className='row mt-2'>
              <div className='col'>
                <div className="input-group">
                  <input type="text" className="form-control bg-light" />
                </div>
              </div>
              <div className='col-md-auto'>
                <div className='mt-3 mt-md-0 btn btn-primary'>Submit a request</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
