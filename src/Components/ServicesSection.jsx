import React from 'react'

import '../Assest/Css/Servicesection.css'
import ServiceSectionCard from './ServiceSectionCard'

import ServiceSectionData from "../ServiceSectionData.json"



const Services = () => {
  return (
    <section className='services-section'>
      <h1>Services</h1>
      <p data-aos="fade-right">Reliable and cost-effective web, enterprise and mobile solutions <br/>
for companies seeking to get a head start in online business.</p>
      
      <div className="Cards row">
        {
          ServiceSectionData.map((jsonData) => (
            
            <ServiceSectionCard 
            key={jsonData.id}
            ServiceImg={jsonData.Service_section_img}
              ServiceHeader={jsonData.Service_section_header}
              ServiceInfo={jsonData.Service_section_info} 
              ServicesLink={jsonData.Services_section_link}
              />
              
          ))
        }

      </div>
      {
 

      }
     

    </section>
  )
}

export default Services
