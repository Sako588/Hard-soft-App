import React from 'react'
import { Link } from 'react-router-dom';
import '../Assest/Css/Testimonials.css'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";


const TestimonialsSection = () => {
    return (
        <section className='testimonials-section'>

            <div className="testimonials-sides">
                <div className="left-side">

                    <Swiper
                        slidesPerView={1}
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
                    >
                        <SwiperSlide>
                            <p>Thank you so much for your wonderful team and yourself to help on this
                                project. So far, this is the best web development team I have worked with.
                                I’m so happy to have your team and yourself to handle this project and I
                                look forward to future collaborations. Your team demonstrated high professionalism,
                                expertise and exceeded our expectations in every way.
                            </p>
                            <h6>Hani W. Al Husseini</h6>
                            <span>General drector</span>
                            <br />
                            <br />
                            <br />
                            <br />
                        </SwiperSlide>

                        <SwiperSlide>
                            <p>Thank you so much for your wonderful team and yourself to help on this
                                project. So far, this is the best web development team I have worked with.
                                I’m so happy to have your team and yourself to handle this project and I
                                look forward to future collaborations. Your team demonstrated high professionalism,
                                expertise and exceeded our expectations in every way.
                            </p>
                            <h6>Hani W. Al Husseini</h6>
                            <span>General drector</span>
                            <br />
                            <br />
                            <br />
                            <br />
                        </SwiperSlide>

                        <SwiperSlide>
                            <p>Thank you so much for your wonderful team and yourself to help on this
                                project. So far, this is the best web development team I have worked with.
                                I’m so happy to have your team and yourself to handle this project and I
                                look forward to future collaborations. Your team demonstrated high professionalism,
                                expertise and exceeded our expectations in every way.
                            </p>
                            <h6>Hani W. Al Husseini</h6>
                            <span>General drector</span>
                            <br />
                            <br />
                            <br />
                            <br />
                        </SwiperSlide>
                    </Swiper>

<Link to='/about'>
<button>Wiev our Testimonials</button>
</Link>

                </div>
                <div className="right-side">


                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection