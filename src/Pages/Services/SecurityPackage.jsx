import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import SecurtyImg from '../../Assest/Img/ServicesPages/security.jpg'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const SecurityPackage = () => {

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
          <ServicesNavigator Securty='link-bold' />
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
        Navigation3='Securty Package'
        Section='Securty Package'
      />

      <div className="services-aside">

        <div className="left-nav">

          <ServicesNavigator Securty='link-bold'/>

        </div>
        <div className="services-right">
          <h5>Secure your Website</h5>
          <p> n the era of communication, cybersecurity measures are one of the main factors a business must attend to. If you’re a business with online transactions, or collecting valuable customer information, you should consider your cyber security plan for your online business.
For our WP web development packages, we are providing the following security benefits:</p>
         
          <ul>
            <li>Protection of Admin Area with change of backend URL</li>
            <li>Usage of strong passwords</li>
            <li>Limitation of Login attempts</li>
            <li>Backups Plugin</li>
            <li>Disable Directory Indexing and Browsing</li>
            <li>Hide wp-config.php and .htaccess</li>
          </ul>
          <div className='service-images'data-aos="fade-right" >
            <img src={SecurtyImg} alt="" />
          </div>
          
          <div data-aos="fade-up" className="btn-service"><button className='btn-get-contact'><Link to='/contact'>Secure your website and business with us, connect tuday!</Link></button></div>

        </div>


      </div>




    </section>
    </>
  )
}

export default SecurityPackage