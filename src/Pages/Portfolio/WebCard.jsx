import React from 'react'
import { Link } from 'react-router-dom'

const WebCard = ({WebImg, Name}) => {

  return (
    <div className=' portfolio-card col-12 col-md-6 col-lg-4'>
        <Link>
        <img src={WebImg} alt="" />
        </Link>
        <h4> {Name}</h4>
        <span>Web Design</span>

    </div>
  )
}

export default WebCard