import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import HostingImg from '../../Assest/Img/ServicesPages/hosting.jpg'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Hosting = () => {

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
          <ServicesNavigator Hosting='link-bold' />
        </div>

        <div className='btns-nav mobil-btn-menu'ref={menuIconRef} onClick={serviceOverlayOpen}>
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
        Navigation3='Hosting'
        Section='Hosting'
      />

      <div className="services-aside">

        <div className="left-nav">

          <ServicesNavigator Hosting='link-bold' />

        </div>
        <div className="services-right">
        
          <h5>Set a Strategy</h5>
          <p>At HARD SOFT , we believe the foundations of your online business should be set well and strategically,
            and it should include a secure and stable hosting for your website, emails, and other hosting related
            issues. According to your project, our experts will provide the best solution to your website, and provide a
            maintenance plan to ensure a stable uptime strategy. Our experts have dealt with over 10 hosting
            companies and will relieve you of the setup and maintenance of your online business.</p>
          <div className='service-images'data-aos="fade-left">
            <img src={HostingImg} alt="" />
          </div>
          <h5>Our Plan</h5>
          <p>Our shared hosting plan includes:</p>
          <ul>
            <li>Unlimited emails</li>
            <li>20 Gb of Disk space</li>
            <li>Less than 24 hours in support issues</li>
            <li>Resolution of Domain pointing, DNS issues, FTPs</li>
            <li>Automatic Daily Backups to be preserved up to 1 month</li>
            <li>99.9% Uptime guarantee</li>
          </ul>



          <div data-aos="fade-up" className="btn-service"><button className='btn-get-contact'><Link to='/contact'>Get more information and support for your business hosting!</Link></button></div>

        </div>



      </div>




    </section>
    </>
  )
}

export default Hosting