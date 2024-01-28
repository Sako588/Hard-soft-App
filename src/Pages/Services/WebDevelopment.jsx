import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import './Services.css'
import WebDev from '../../Assest/Img/ServicesPages/web-dev.jpg'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const Webdev = () => {

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
        <ServicesNavigator Development='link-bold' />
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
          Navigation3='Web Development'
          Section='Web Development'
        />
        <div className="services-aside">

          <div className="left-nav">

            <ServicesNavigator Development='link-bold' />

          </div>
          <div className="services-right">
            <h5>Get started</h5>
            <p>Having a website is the first step to running an online business. A good, user-friendly responsive
              website with the right flow and structure will help you to better convey your message and encourage visitors to take action accordingly.
              Our teams offer you the right layout and design based on your industry and available content.
              The services we offer include the entire web development cycle, including website inception, design,
              programming and development, web hosting and consulting.
              The solutions we provide will ensure that you have a versatile and compatible website to reach out
              to your audience on a wide range of platforms and devices, and we will provide you with the knowledge
              you need to maintain the competitive edge. Aside from being attractive and authentic to your brand, your
              website will be responsive, rich in content, and SEO-friendly.</p>
            <div className='service-images' data-aos="fade-left" >
              <img src={WebDev} alt="" />
            </div>
            <h5>CMS Development</h5>
            <p>Whether you’re an online retailer, a news agency, or a non-profit organization, your business will revolve around delivering compelling
              and well-structured content to your visitors and potential clients. HARD SOFT  provides solutions based on mainstream content management systems
              (CMS). Our solutions include WordPress, Joomla!, Magento, and other CMSs.
              The use and customization of commercial platforms will make sure you’ll be automatically
              updated with the latest security and functionality updates as they are rolled out by the manufacturers.
              We also provide customized solutions and plugin-based enhancements to improve your website
              and add additional features such as social sharing, live chat and <Link to='/securty-package'>security services</Link>.</p>

            <div className="btn-service"><button className='btn-web-desgn'><Link to='/blog'>See our projects, over 200 websites in the Middle East</Link></button></div>
            <h5>One-Page Websites</h5>
            <p >One page websites will tell a story in the order you want, making your online
              presentation to the point and concise, and pleasant to browse. You can lead your
              visitors in the flow you want and present the message you need. Using CTAs you can increase your
              conversion rates, and build your online strategy to promote your business.</p>


            <div data-aos="fade-up"  className="btn-service"><button className='btn-get-contact'><Link to='/contact'>Get in touch for your revamp or website startup!</Link></button></div>

          </div>



        </div>
      </section>
    </>
  )
}

export default Webdev