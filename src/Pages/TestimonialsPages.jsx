import React from 'react'
import '../Assest/Css/TestimonialsPages.css'

import TestimonialsData from '../TestimonialsPages.json'


const TestimonialsPages = () => {



  return (
    <div className="testimonials-pages">

<h3>Testimonials</h3>
      {TestimonialsData.map((items) => (
        <div key={items.id} className="testimonials-pages-aside">
          
          <div  className="testimonial-left-aside">
            <h3>{items.name}</h3>
            <span>{items.position}</span>
            <p>{items.comment}</p>
          </div >
          <div className="testimonial-right-aside">
            <img src={items.img} alt="" />
          </div>
        </div>
      ))}

    </div>
  )
}

export default TestimonialsPages