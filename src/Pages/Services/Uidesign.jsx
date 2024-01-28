import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import UiImg from '../../Assest/Img/ServicesPages/ui.jpg'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Uidesign = () => {

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
          <ServicesNavigator UiDesign='link-bold' />
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
        Navigation3='UI Design/Wireframing'
        Section='UI Design/Wireframing'
      />

      <div className="services-aside">

        <div className="left-nav">

          <ServicesNavigator UiDesign='link-bold' />

        </div>
        <div className="services-right">
         
          <h5>A Blueprint of Your Idea</h5>
          <p>In custom web and app applications, one of the most important methods to proceed is the detailing and planning done right from the
            beginning. Wire-framing and UI design is one of the first steps to help jump start your business idea.
            Wireframing your application model is a set of images that will show a schematic or blueprint of your website or app,
            in which the functions are outlined and set out.</p>
          <div className='service-images' data-aos="fade-left" >
            <img src={UiImg} alt="" />
          </div>
  
          <p data-aos="fade-up">Once wireframing and detailed documentation is approved, our teams proceed on the UI design based
             on the elements and flows approved in wireframing. After wireframe finalization, the development and design team and client
             are all on one page and the project moves forward smoothly.</p>

          <div data-aos="fade-up-left" className="btn-service">
            <button className='btn-get-contact'><Link to='/contact'>Jump start your business idea with us!</Link></button>
            </div>

        </div>



      </div>

    </section>
    </>
  )
}

export default Uidesign