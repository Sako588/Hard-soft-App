import React from 'react'

import { Link } from 'react-router-dom'

import '../Assest/Css/LatestProject.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

// Images
import photo1 from '../Assest/Img/LatestProject/photo1.png'
import photo2 from '../Assest/Img/LatestProject/photo2.png'
import photo3 from '../Assest/Img/LatestProject/photo3.png'
import photo4 from '../Assest/Img/LatestProject/photo4.jpg'


const LatestProject = () => {
  return (
    <section className='latest-project'>
      <h1>Latest Projects</h1>

      <div className="latest-project-cards">

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
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link className="latest-project-card" to="/web-design">
              <img src={photo1} alt="" data-aos="fade-right" />
              <h3>Breath of Fresh Nurses</h3>
              <p>Web Design</p>
              <br/>
              <br/>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="latest-project-card" to="/web-design">
              <img src={photo2} alt="" data-aos="fade-right"/>
              <h3>Breath of Fresh Nurses</h3>
              <p>Web Design</p>
              <br/>
              <br/>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="latest-project-card" to="/web-design">
              <img src={photo3} alt="" data-aos="fade-left" />
              <h3>Breath of Fresh Nurses</h3>
              <p>Web Design</p>
              <br/>
              <br/>

            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="latest-project-card" to="/web-design">
              <img src={photo4} alt="" data-aos="fade-left" />
              <h3>Breath of Fresh Nurses</h3>
              <p>Web Design</p>
              <br/>
              <br/>
            </Link>
          </SwiperSlide>

        </Swiper>

      </div>


    </section>
  )
}

export default LatestProject