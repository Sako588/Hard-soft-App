import React from 'react'
import '../Assest/Css/Aboutsection.css'
import "../Assest/Css/ButtonLearn.css"
import { Link } from 'react-router-dom'
import carousel1 from '../Assest/Img/Home/carousel1.jpg'
import carousel2 from '../Assest/Img/Home/carousel2.jpg'
import carousel3 from '../Assest/Img/Home/carousel3.jpg'
import line from '../Assest/Img/Home/line.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import "swiper/css";
import { Parallax, Autoplay, Pagination, EffectFade } from "swiper";
import ButtonLearn from './ButtonLearn'

// Personal
import Adil from '../Assest/Img/About/Personnal/adil.jpg'
import Ammar from '../Assest/Img/About/Personnal/Ammar.jpg'
import Ayad from '../Assest/Img/About/Personnal/Ayad.jpg'
import Elias from '../Assest/Img/About/Personnal/elias.jpg'
import Ghadah from '../Assest/Img/About/Personnal/ghadah.jpg'
import Kassem from '../Assest/Img/About/Personnal/Kassem.jpg'

const About = () => {
    return (
        <>
            <div className='swiper-section'>

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={2000}
                    grabCursor={true}
                    effect={"fade"}

                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}

                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Parallax, Autoplay, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"

                        data-swiper-parallax="60%"
                    ></div>
                    <SwiperSlide>
                        <div className='slide-swiper'>
                            <div><img src={carousel1} alt="" /></div>

                            <div className="title title-1" data-swiper-parallax="2000">
                                BUILD YOUR <br />
                                BUSINESS FUTURE WITH US
                            </div>

                        </div>



                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-swiper'>
                            <div><img src={carousel2} alt="" /></div>

                            <div className="title title-2" data-swiper-parallax="-2000">
                                RIDE IN THE ROAD TO REALIZE <br />
                                YOUR ONLINE BUSINESS DREAMS
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-swiper'>
                            <div><img src={carousel3} alt="" /></div>
                            <div className="title title-3" data-swiper-parallax="-2000">
                                OVER 500 CLIENTS IN THE MIDDLE EAST
                                <p>With a vast clientele in the Middle East, <br />
                                    we can provide the best solutions for you
                                </p>
                            </div>

                        </div>



                    </SwiperSlide>
                </Swiper>


            </div>

            <div className='about-me-section w-100'>
                <div data-aos="fade-down" className='about-me'>
                    <div className='about-me-left'>

                        <h3>Who We Are</h3>
                        <p>Our team is your team!</p>
                    </div>
                    <div className='about-me-center'>
                        <img src={line} alt="" />
                    </div>
                    <div className='about-me-right'>
                        <p>One of our most valued honors is the trust, confidentiality and partnership clients put in our teams to build
                            their future and business growth. Currently,
                            Hard Soft has its main headquarters based in Maryland, USA, and a branch in London and Amsterdam.</p>

                        <Link to="/about"><ButtonLearn classAdi='learn-more' /></Link>
                    </div>
                </div>
            </div>

            <div className="persennal-section">
<h3>Personal</h3>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        824: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },

                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper personal-swiper"
                >
                    <SwiperSlide>
                        <div className="personnal">
                            <div className="personnal-item">

                                <div className="image-personal">
                                    <img src={Adil} alt="" />
                                </div>

                                <h3>Adil Bubere</h3>
                                <span>CEO - Bubere’s</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="personnal">
                            <div className="personnal-item">

                                <div className="image-personal">
                                    <img src={Ammar} alt="" />
                                </div>

                                <h3>Ammar Nueimi</h3>
                                <span>Universal Restaurant (UR) Founder</span>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="personnal">
                            <div className="personnal-item">

                                <div className="image-personal">
                                    <img src={Ayad} alt="" />
                                </div>

                                <h3> Ayad Al-Mukhtar</h3>
                                <span>Sole Director, Telematique Limited </span>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="personnal">
                            <div className="personnal-item">

                                <div className="image-personal">
                                    <img src={Elias} alt="" />
                                </div>

                                <h3>Elias Charro</h3>
                                <span>F & B Manager Shanasheel Palace Hotel</span>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="personnal">
                            <div className="personnal-item">

                                <div className="image-personal">
                                    <img src={Ghadah} alt="" />
                                </div>

                                <h3>Ghadah Alghamdi</h3>
                                <span>Senior Communication Specialist</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="personnal">
                            <div className="personnal-item">

                                <div className="image-personal">
                                    <img src={Kassem} alt="" />
                                </div>

                                <h3>Kassem Diab</h3>
                                <span>General Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>

            </div>
        </>
    )
}

export default About