import React from 'react'
import { useState } from 'react'
import '../Assest/Css/Faq.css'
import Navigation from '../Components/Navigation'
import FaqData from '../FaqData.json'

import  { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
      

const Faq = () => {


  
  const [expandedIndex, setExpandedIndex] = useState(null);

  function toggle(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <section className="fag-section">
      <Navigation
        Navigation1='Home'
        Navigation2='Faq'
        Section='FAQ'
      />

      <div className="akordion">
        {FaqData.map((item, index) => (
          <div key={item.id} className="akordion-item">

            <h4>{item.group}</h4>

            <div className='item'>
              <div className="akordion-header" onClick={() => toggle(index)}>
                <h5>{item.question}</h5>
                <span>{expandedIndex === index ?<IoMdArrowDropup/> : <IoMdArrowDropdown/>  }</span>
              </div>
              {expandedIndex === index && (
                <div className="akordion-panel">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
export default Faq