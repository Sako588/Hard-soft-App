import React from 'react'
import '../Assest/Css/ServicesNavigator.css'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
const ServicesNavigator = ({Development,Ecommerca,Hosting,Securty,UiDesign,Graphical,Integration}) => {
    return (
        <div className='service-nav'>
            <span>Our Services</span>
            <ul>
                <li className={Development}><Link to="/services/web-development"><MdKeyboardArrowRight />Web Development</Link></li>
                <li className={Ecommerca} ><Link to="/services/ecommerca"><MdKeyboardArrowRight />Ecommerca</Link></li>
                <li className={Hosting}><Link to="/services/hosting"><MdKeyboardArrowRight />Hosting</Link></li>
                <li className={Securty}><Link to="/services/securty-package"><MdKeyboardArrowRight />Securty Package</Link></li>
                <li className={UiDesign}><Link to="/services/ui-design"><MdKeyboardArrowRight />UI Design/Wireframing</Link></li>
                <li className={Graphical}><Link to="/services/graphical-design"><MdKeyboardArrowRight />Graphical Design</Link></li>
                <li className={Integration}><Link to="/services/api-integration"><MdKeyboardArrowRight />API Integration</Link></li>
            </ul>



        </div>
    )
}

export default ServicesNavigator