import React from 'react'
import { Link } from 'react-router-dom'

import '../Assest/Css/Footer.css'
import logoblack from '../Assest/Img/Header/logoblack.png'

const Footer = () => {
  return (
    <footer>
      <section className="footer">

        <div className="footer-top">

          <div className="footer-main">
            <h3>Main Links</h3>
            <ul >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-portfolio">
            <h3>Services</h3>
            <ul>
              <li ><Link to="/services/web-development">Web Development</Link></li>
              <li ><Link to="/services/ecommerca">Ecommerca</Link></li>
              <li ><Link to="/services/hosting">Hosting</Link></li>
              <li ><Link to="/services/securty-package">Securty Package</Link></li>
              <li ><Link to="/services/ui-design">UI Design/Wireframing</Link></li>
              <li ><Link to="/services/graphical-design">Graphical Design</Link></li>
              <li ><Link to="/services/api-integration">API Integration</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Portfolio</h3>
            <ul>
              <li ><Link to="/portfolio/logo-design">Logo Design</Link></li>
              <li ><Link to="/portfolio/web-design">Web Design</Link></li>
              <li ><Link to="/portfolio/app-development">APP Development</Link></li>

            </ul>
          </div>

        </div>

        <div className="footer-bottom">

          <Link className="footer-brand" to='/' >
            <img src={logoblack} alt="logo" />
          </Link>

          <span>© Copyright 2020. All Rights Reserved. Hard Soft IT Solutions.</span>


        </div>




      </section>
    </footer>
  )
}

export default Footer