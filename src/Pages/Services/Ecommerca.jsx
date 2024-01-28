import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import Navigation from '../../Components/Navigation'
import ServicesNavigator from '../../Components/ServicesNavigator'
import Ecomerca from '../../Assest/Img/ServicesPages/ecommerce.jpg'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Ecommerca = () =>{
  

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
            <ServicesNavigator Ecommerca='link-bold' />
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
            Navigation3='Ecommerca'
            Section='Ecommerca'
          />
  
          <div className="services-aside">
  
            <div className="left-nav">
              <ServicesNavigator Ecommerca='link-bold' />
            </div>
  
            <div className="services-right">
              <h5>Setup Your Online Shop</h5>
              <p>Our teams have setup ecommerce websites for online shopping of products, services and digital products based on various platforms, from WordPress, Joomla, Magento, Drupal, Nopcommerce and more.
                Our current solution is Woocommerce based on WordPress. With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.
                This solution will provide your store with a list of categorized products, easy to search, sort and filter of products, easy checkout and purchase of transactions, including <Link to='/api-integration'> payment gateways</Link> such as COD, PayPal,
                and others such as HyperPay, Paytabs, Braintree, Stripe and more.</p>
              <div className='service-images' data-aos="fade-right">
                <img src={Ecomerca} alt="" />
              </div>
              <h5>Our Solution</h5>
              <p>Our solution with Woocommerce also allows other customized features and settings such as shipping integration,
                tags, comments/product reviews, unlimited images and galleries for a product, unlimited product quantities, export
                and import through CSV feature, and reports such as sales, order details, etc. You will also be able to do refunds,
                setup email templates, and even connect to your marketing newsletter for automation and
                upsells and other marketing techniques. You can view all Woocommerce features here as well.</p>
  
              <div data-aos="fade-up" className="btn-service"><button className='btn-get-contact'><Link to='/contact'>Connect today for your online shop!</Link></button></div>
  
            </div>
  
  
          </div>
  
  
  
  
        </section>
      </>
    )
  }
  
  export default Ecommerca
