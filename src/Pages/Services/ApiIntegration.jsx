import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import ApiImg from '../../Assest/Img/ServicesPages/api.jpg'

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const ApiIntegration = () => {

  const mobileMenuRef = useRef()
  const menuIconRef = useRef()
  const crossIconRef = useRef()
  const servicePagesRef = useRef()

  const serviceOverlayOpen = (e) => {
    const menuIcon = e.target

    if (menuIcon.classList.contains('mobil-btn-menu')) {
      mobileMenuRef.current.classList.add('aktiv-service-menu')
      menuIconRef.current.style.display = ('none')
      crossIconRef.current.style.display = ('block')
      servicePagesRef.current.classList.add('margin-left')
      console.log(mobileMenuRef)
    }
  }

  const serviceOverlayclose = (e) => {
    const crossIcon = e.target

    if (crossIcon.classList.contains('mobil-btn-cross')) {
      mobileMenuRef.current.classList.remove('aktiv-service-menu')
      menuIconRef.current.style.display = ('block')
      crossIconRef.current.style.display = ('none')
      servicePagesRef.current.classList.remove('margin-left')

    }
  }


  return (
    <>
      <div className="mobile-service-nav" ref={mobileMenuRef}>
        <div className="nav-service">
          <ServicesNavigator Integration='link-bold' />
        </div>
        <div className='btns-nav mobil-btn-menu' ref={menuIconRef} onClick={serviceOverlayOpen}>
          <button ><BsFillMenuButtonWideFill className='btn-menu' /></button>
        </div>

        <div className='btns-nav mobil-btn-cross' ref={crossIconRef} onClick={serviceOverlayclose}>
          <button ><RxCross1 className='btn-cross' /></button>
        </div>

      </div>
      <section className='services-pages' ref={servicePagesRef}>
        <Navigation
          Navigation1='Home'
          Navigation2='Services'
          Navigation3='API Integration'
          Section='API Integration'
        />

        <div className="services-aside">

          <div className="left-nav">

            <ServicesNavigator Integration='link-bold' />

          </div>
          <div  className="services-right">
            <h5>What is API</h5>
            <p >API stands for application programming interface. In the development sector, it plays an important role to connect
              different applications and scale functions to the needs of a business.
              APIs will allow applications to access features and data of another application or service
              as a third party and will play the role of a “messenger” so two applications can “talk” to each other.</p>
            <div className='service-images' data-aos="fade-right">
              <img src={ApiImg} alt="" />
            </div>

            <p>At HARD SOFT , our teams are experts in API integration and worked on the following APIs.
              Payment Gateways:</p>
            <ul>
              <li>HyperPay</li>
              <li>PayPal</li>
              <li>Payeezy by First Data</li>
              <li>Paytabs</li>
              <li>Braintree</li>
              <li>Stripe</li>
            </ul>

            <p>Other APIs:</p>
            <ul>
              <li>Twilio API integration</li>
              <li>REST API</li>
              <li>JSON API</li>
              <li>apaad Restaurant System</li>
              <li>Mailchimp API</li>

            </ul>


            <div className="btn-service" data-aos="fade-up">
              <button className='btn-get-contact'><Link to='/contact'>Get in touch for more information</Link></button>
            </div>

          </div>



        </div>




      </section>
    </>
  )
}

export default ApiIntegration