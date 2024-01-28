import React from 'react'
import "../Assest/Css/ButtonLearn.css"
import "../Assest/Css/Servicesection.css"
import ButtonLearn from './ButtonLearn'
import { Link } from 'react-router-dom'

const ServiceSectionCard = ({ServiceImg, ServiceHeader, ServiceInfo, ServicesLink}) => {
  return (
    <div data-aos="fade-up" className='card col-12 col-md-6'>
      <div className="img">  <img src={ServiceImg} alt="" /></div>
      <div>
        <h3>
          {ServiceHeader}
        </h3>
        <p>{ServiceInfo}</p>
        <Link to={ServicesLink}> <ButtonLearn classAdi="learn-more" /> </Link>
      </div>
    </div>
  )
}

export default ServiceSectionCard