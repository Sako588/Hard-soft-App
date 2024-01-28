
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import "./App.css"
import './Assest/Css/Loading.css'
import React, { useState } from 'react'

import { useRef } from 'react'

import "./Assest/Css/Header.css"
import './Assest/Css/reset.css'
import { NavLink } from 'react-router-dom';

import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'

// Import pager
import Header from './Components/Header';
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import About from './Pages/About'

// Services pages start
import WebDevelopment from './Pages/Services/WebDevelopment'
import Ecommerca from './Pages/Services/Ecommerca'
import Hosting from './Pages/Services/Hosting'
import SecurtyPackage from './Pages/Services/SecurityPackage'
import Uidesign from './Pages/Services/Uidesign'
import GraphicalDesign from './Pages/Services/GraphicalDesign'
import ApiIntegration from './Pages/Services/ApiIntegration'
// Services pages end

// Portfolio pages start
import LogoPortfolio from './Pages/Portfolio/LogoPortfolio'
import WebDesignPortfolio from './Pages/Portfolio/WebDesignPortfolio'
import AppPortfolio from './Pages/Portfolio/AppPortfolio'

// Portfolio pages end
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import TestimonialsPages from './Pages/TestimonialsPages'
import Faq from './Pages/Faq'
import Blog from './Pages/Blog'




function App() {


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);


  const overlayMenuRef = useRef()
  const crossIconRef = useRef()
  const burgerIconRef = useRef()
  const butunSeyfe = useRef()


  const openOverlay = (e) => {
    const burgerIcon = e.target

    if (burgerIcon.classList.contains('bar-icon')) {

      overlayMenuRef.current.classList.add('overlay-menu-activ')
      crossIconRef.current.style.display = ('block')
      burgerIconRef.current.style.display = ('none')
      butunSeyfe.current.classList.add('butun-seyfe-right')


    }
  }

  const closeOverlay = (e) => {

    const crossIcon = e.target

    if (crossIcon.classList.contains('overlay-btn-cross')) {
      overlayMenuRef.current.classList.remove('overlay-menu-activ')
      crossIconRef.current.style.display = ('none')
      burgerIconRef.current.style.display = ('block')
      butunSeyfe.current.classList.remove('butun-seyfe-right')
    }
  }


  // Overlay services dropdown
  const dpServices = useRef()
  const dpPortfolio = useRef()

  const openOverlayServicesDp = (e) => {

    const openServicesDp = e.target

    if (openServicesDp.classList.contains('services-overlay')) {

      dpServices.current.classList.toggle('aktiv-services-content')
    }
  }

  const openOverlayPortfolioDp = (e) => {

    const openPortfolioDp = e.target

    if (openPortfolioDp.classList.contains('portfolio-overlay')) {

      dpPortfolio.current.classList.toggle('aktiv-portfolio-content')
    }
  }

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      {loading ?
        (<div className='center'>
          <div className='ring'>
            <div className='ring-in'>
              <div className='ring-in-in'>

              </div>
            </div>
          </div>
          <span>Loading...</span>
        </div>) :

        (
          <BrowserRouter >



            <div className='overlay-menu' ref={overlayMenuRef}>

              <div className='overlay-list'>

                <div>
                  <ul className="navbar-list">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link services-overlay" onClick={openOverlayServicesDp} to='/services'>Services<MdArrowDropDown className='arrow-icon' /></NavLink>
                      <div className='overlay-services-content' ref={dpServices}>
                        <ul>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/web-development">Web Development</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/ecommerca">Ecommerca</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/hosting">Hosting</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/securty-package">Securty Package</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/ui-design">UI Desgn</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/graphical-design">Graphical Design</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/services/api-integration">API Integration</NavLink></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link portfolio-overlay" onClick={openOverlayPortfolioDp} to='/portfolio'>Portfolio<MdArrowDropDown className='arrow-icon' /></NavLink>
                      <div className='overlay-portfolio-content' ref={dpPortfolio}>
                        <ul>
                          <li className='dp-list'><NavLink activeClassName="active" to="/portfolio/logo-design">Logo Design</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/portfolio/web-design">Web Design</NavLink></li>
                          <li className='dp-list'><NavLink activeClassName="active" to="/portfolio/app-development">App Development</NavLink></li>

                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to='/faq'>FAQ</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to='/blog'>BLog</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to='/contact'>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='overlay-btn-cross' onClick={closeOverlay}>
                <button className='cross-icon ' ref={crossIconRef}>
                  <RxCross1 className='btn-nav'/>
                </button>
              </div>

            </div>


            <div className='butun-seyfe' ref={butunSeyfe}>

              <button className='bar-icon' onClick={openOverlay} ref={burgerIconRef}>
                <AiOutlineBars className='btn-nav' />
              </button>

              <Header />

              <Routes>


                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/about' element={<About />} />
                <Route path='/testimonials' element={<TestimonialsPages />} />
                {/* Servises pages start */}
                <Route path='/services' element={<WebDevelopment />} />
                <Route path='/services/web-development' element={<WebDevelopment />} />
                <Route path='/services/ecommerca' element={<Ecommerca />} />
                <Route path='/services/hosting' element={<Hosting />} />
                <Route path='/services/securty-package' element={<SecurtyPackage />} />
                <Route path='/services/ui-design' element={<Uidesign />} />
                <Route path='/services/graphical-design' element={<GraphicalDesign />} />
                <Route path='/services/api-integration' element={<ApiIntegration />} />
                {/* Servises pages end */}
                {/* Portfolio pages start */}
                <Route path='/portfolio' element={<LogoPortfolio />} />
                <Route path='/portfolio/logo-design' element={<LogoPortfolio />} />
                <Route path='/portfolio/web-design' element={<WebDesignPortfolio />} />
                <Route path='/portfolio/app-development' element={<AppPortfolio />} />
                {/* Portfolio pages end */}
                <Route path='/faq' element={<Faq />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />

              </Routes>

              <Footer />
            </div>

          </BrowserRouter>)}

    </>
  );
}

export default App;
