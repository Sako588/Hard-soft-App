import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import GraphicImg from '../../Assest/Img/ServicesPages/graphic.jpg'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const GraphicalDesign = () => {

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
          <ServicesNavigator Graphical='link-bold' />
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
          Navigation3='Graphical Design'
          Section='Graphical Design'
        />

        <div className="services-aside">

          <div className="left-nav">

            <ServicesNavigator Graphical='link-bold' />

          </div>
          <div className="services-right">
           
            <h5>Make your Brand Stand Out</h5>
            <p>In business today, graphical design plays an important role to display your company brand, message and mood.
              Once your brand is recognized, it will affect customers in providing trust and assurance in your brand. At Comelite, we provide you with the
              basics of your brand, starting from your logo, company brochure and profiles, print materials such as business cards,
              flyers, letterheads, posters and more.
              Whether you want online branding and creative design, or print materials, our designers are at your service. We pay
              attention to your colors, typefaces, and the mood you want to convey for your business brand.</p>
            <div className='service-images'data-aos="fade-left">
              <img src={GraphicImg} alt="" />
            </div>

            <p >You can find our services in some of the below items:</p>
            <ul>
              <li>Logo Design</li>
              <li>Business Cards</li>
              <li>Letterheads</li>
              <li>PowerPoint Profiles and Templates</li>
              <li>Calendars</li>
              <li>Social Media Banners</li>
            </ul>



            <div data-aos="fade-down" className="btn-service">
              <button className='btn-get-contact'><Link to='/contact'>Want to experience our creativity? Get in touch!</Link></button>
            </div>

          </div>


        </div>




      </section>
    </>
  )
}

export default GraphicalDesign