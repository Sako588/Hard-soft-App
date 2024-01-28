import React, { useState } from 'react';
import '../Assest/Css/Faq.css'


import { BiDownArrow, BiUpArrow } from "react-icons/bi";

import FaqData from '../FaqData.json'

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function toggle(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="akordion">
      {FaqData.map((item, index) => (
        <div key={item.id} className="fag-item">
          <h5>{item.group}</h5>
          <div className={expandedIndex === index ? "fag-aside-open" : "fag-aside"} onClick={() => toggle(index)}>
            <div className="inner-faq">
           
              <h6>{item.question}</h6>
              <span>{expandedIndex === index ? <BiUpArrow className='color-red' /> : <BiDownArrow />}</span>

            </div>
            {expandedIndex === index && (
              <div className="faq-panel">
                <p>{item.answer}</p>


              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;