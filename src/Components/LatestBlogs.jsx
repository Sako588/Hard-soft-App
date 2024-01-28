import React from 'react'
import '../Assest/Css/LatestBlogs.css'
import "../Assest/Css/ButtonLearn.css"
import { Link } from 'react-router-dom';
import ButtonLearn from './ButtonLearn';
// Images
import Images1 from '../Assest/Img/Blog/UR-Case.png'
import Images2 from '../Assest/Img/Blog/need.png'
import Images3 from '../Assest/Img/Blog/Best.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";


const LatestBlogs = () => {
    return (

        <section className="latest-blogs">
            <h1>Latest Blogs</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"

                breakpoints={{
                    240: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    
                   600: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
        
                    1300: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}

            >

                <SwiperSlide>
                    <div data-aos="fade-right" className="blog-side">
                        <img src={Images1} alt="" />
                        <div className="blog-side-contents">
                            <div className="blog-contents-left">
                                <p>17</p>
                                <span>May</span>
                            </div>

                            <div className="blog-contents-right">
                                <Link to='/blog'>
                                    UR CASE STUDY: LAUNCH OF AN IDEA
                                </Link>
                                <a href="#">HARD SOFT IT SOLUTIONS</a>
                                <p>The main idea of UR (Universal Restaurant) came on my
                                    plate on around 2 years ago, this </p>
                                    <Link to='/blog'> <ButtonLearn classAdi='learn-more' /></Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div data-aos="fade-up" className="blog-side">
                        <img src={Images2} alt="" />
                        <div className="blog-side-contents">
                            <div className="blog-contents-left">
                                <p>15</p>
                                <span>May</span>
                            </div>

                            <div className="blog-contents-right">
                                <Link to='/blog'>
                                    7 MAIN SIGNS THAT YOU NEED A WEBSITE REDESIGN
                                </Link>
                                <a href="#">HARD SOFT IT SOLUTIONS</a>
                                <p>When was the last time you had a website redesign? Websites
                                    need revamps every now and then,</p>
                                    <Link to='/blog'> <ButtonLearn classAdi='learn-more' /></Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div data-aos="fade-left" className="blog-side">
                        <img src={Images3} alt="" />
                        <div className="blog-side-contents">
                            <div className="blog-contents-left">
                                <p>03</p>
                                <span>Feb</span>
                            </div>

                            <div className="blog-contents-right">
                                <Link to='/blog'>
                                    WHAT ARE THE BEST WOOCOMMERCE PLUGINS FOR YOUR ECOMMERCE WEBSITE?
                                </Link>
                                <a href="#">HARD SOFT IT SOLUTIONS</a>
                                <p>In previous articles I mentioned why Woocommerce is the ideal ecommerce solution
                                    for your online shop. </p>
                                <Link to='/blog'> <ButtonLearn classAdi='learn-more' /></Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </section>

    )
}

export default LatestBlogs