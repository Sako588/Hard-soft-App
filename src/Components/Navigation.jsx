import React from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import "../Assest/Css/Navigation.css"

const Navigation = ({Navigation1, Navigation2, Navigation3, Section }) => {
    return (
        <div className='navigation-section'>
            <div className="navigation-aside">
            <div className='left-section'>
                <Link to='/'>{Navigation1}</Link>
                <MdKeyboardArrowRight />
                <Link>{Navigation2}</Link>
                <MdKeyboardArrowRight />
                <Link>{Navigation3}</Link>
            </div>

            <div className='right-section'>
                <span>{Section}</span>
            </div>
            </div>

        </div>
    )
}

export default Navigation