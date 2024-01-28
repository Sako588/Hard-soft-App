import React, { useRef, useState } from 'react'
import '../Assest/Css/Header.css'
import { Link, NavLink } from 'react-router-dom'

import logo from '../Assest/Img/Header/logo.png'

import { MdArrowDropDown } from "react-icons/md";

import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";





const Header = () => {

    const [navbar, setNavbar] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else { setNavbar(false) };
    }

    window.addEventListener('scroll', changeNavbar);


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const searchMenuRef = useRef()
    const CloseSearcIcon = useRef()
    const SearchIcon = useRef()

    const openSearch = (e) => {
        const searchIcon = e.target

        if (searchIcon.classList.contains('search-icon')) {
            searchMenuRef.current.classList.add('search-active')
            SearchIcon.current.style.display = ('none')
            CloseSearcIcon.current.style.display = ('block')
        }
    }

    const closeSearch = (e) => {
        e.preventDefault()
        const searchCloseIcon = e.target

        if (searchCloseIcon.classList.contains('btn-search-cross')) {
            searchMenuRef.current.classList.remove('search-active')
            SearchIcon.current.style.display = ('block')
            CloseSearcIcon.current.style.display = ('none')
        }
    }



    return (
        <>
            <div className='search-menu' ref={searchMenuRef}>
                <form className={navbar ? 'search-top' : 'search'} role="search">

                    <input className="input-search" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn-search" type="submit"> <BsSearch className='btn-nav' /> </button>
                </form>

            </div>

            <div className={navbar ? 'up-header' : 'up-header-none'}>
                <button className="scrollTop" onClick={scrollToTop}>
                    <FaArrowAltCircleUp />
                </button>
            </div>


            <nav className={navbar ? 'nav-aktiv' : 'navbarr'}>
                <div className={navbar ? 'logo-section-none' : "logo-section"}>
                    <Link className="navbar-brand" data-aos="fade-left" to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div></div>
                </div>
                <div className="navbar navbar-expand-lg bg-body-tertiary">

                    <div className="container-fluid">
                        <div className="navbar-collapse" id="navbarNav">
                            <div className={navbar ? 'navbar-brand-block' : 'navbar-left'}>

                                <Link className="navbar-brand" data-aos="fade-left" to='/' >
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>

                            <ul className="navbar-nav navbar-list">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" activeClassName="active" >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">

                                    <NavLink to="/about" className="nav-link" activeClassName="active" >
                                        About
                                    </NavLink>
                                </li>

                                <div className="nav-item li-services">
                                    <NavLink className="nav-link" to="/services" activeClassName="active" >Services<MdArrowDropDown /></NavLink>


                                    <div className='services-dp-content'>
                                        <ul>
                                            <li className='dp-list services'>
                                                <NavLink className="dp-list" to="/services/web-development" activeClassName="active" >
                                                    Web Development
                                                </NavLink></li>
                                            <li className='dp-list'>
                                                <NavLink className="dp-list" to="/services/ecommerca" activeClassName="active" >
                                                    Ecommerca
                                                </NavLink></li>
                                            <li className='dp-list'>
                                                <NavLink className="dp-list" to="/services/hosting" activeClassName="active" >
                                                    Hosting
                                                </NavLink></li>
                                            <li className='dp-list'>
                                                <NavLink className="dp-list" to="/services/securty-package" activeClassName="active" >
                                                    Securty Package
                                                </NavLink></li>
                                            <li className='dp-list'>
                                                <NavLink className="dp-list" to="/services/ui-design" activeClassName="active" >
                                                    UI Design/Wireframing
                                                </NavLink>
                                            </li>
                                            <li className='dp-list'>
                                                <NavLink className="dp-list" to="/services/graphical-design" activeClassName="active" >
                                                    Graphical Design
                                                </NavLink></li>
                                            <li className='dp-list'>
                                                <NavLink className="dp-list" to="/services/api-integration" activeClassName="active" >
                                                    API Integration
                                                </NavLink></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item li-portfolio">
                                    <NavLink className="nav-link" to='/portfolio' activeClassName="active" >Portfolio<MdArrowDropDown /></NavLink>
                                    <div className='Portfolio-dp-content'>
                                        <ul>
                                            <li className='dp-list'><NavLink activeClassName="active" to="/portfolio/logo-design" >Logo Design</NavLink></li>
                                            <li className='dp-list'><NavLink activeClassName="active" to="/portfolio/web-design" >Web Design</NavLink></li>
                                            <li className='dp-list'><NavLink activeClassName="active" to="/portfolio/app-development" >APP Development</NavLink></li>

                                        </ul>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <NavLink to="/faq" className="nav-link" activeClassName="active" >
                                        FAQ
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blog" className="nav-link" activeClassName="active" >
                                       BLog
                                    </NavLink>

                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link" activeClassName="active" >
                                        Contact
                                    </NavLink>

                                </li>
                            </ul>

                            <div className='navbar-right'>
                                <ul className="navbar-social">
                                    <li className="nav-item">
                                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.instagram.com/"><FaInstagram /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.youtube.com/"><FaYoutube /></a>
                                    </li>
                                </ul>

                                <button className='search-icon' ref={SearchIcon} onClick={openSearch} >
                                    <BsSearch className='btnsearch' />
                                </button>
                                <button className="btn-search-cross" ref={CloseSearcIcon} onClick={closeSearch}>
                                    <RxCross1 className='btn-nav' />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header