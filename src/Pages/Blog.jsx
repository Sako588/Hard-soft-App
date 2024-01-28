import React from 'react'
import "../Assest/Css/Blog.css"
import { useState, useEffect } from 'react'
import Navigation from '../Components/Navigation'
import ButtonLearn from '../Components/ButtonLearn'

import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";





const Blog = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
    fetch("BlogData.json")
      .then((res) => res.json())
      .then((melumat) => setData(melumat));
 }, [])

    return (
        <section className="blog-section">

            <Navigation
                Navigation1='Home'
                Navigation2='BLog'
                Section='BLog'
            />

            <div className="blog-items row">

{ data && 
             data.map((item) =>{

              return  <Link key={item.id} className="blog-item col-12 col-md-6 col-lg-4 ">
                    <div className="images">
                        <img src={item.images} alt="" />
                        <FaSearch className='blog-search-icon' />
                    </div>
                    <div className="header-item">
                        <div className="date">
                            <span>{item.day}</span>
                            <span>{item.month}</span>
                        </div>
                        <div>
                            <h5>{item.header}</h5>
                            <Link>HARD SOFT IT SOLUTIONS</Link>
                        </div>
                    </div>
                    <p>{item.information}</p>
                    <Link> <ButtonLearn classAdi='learn-more' /></Link>
                </Link>

               

})}

            </div>
            
        </section>
    )
}

export default Blog