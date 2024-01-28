import React from 'react'
import { Link } from 'react-router-dom'


const LogoCard = ({LogoImg, Name}) => {
  return (

    <div className=' portfolio-card col-12 col-md-6 col-lg-4'>
        <Link>
        <img src={LogoImg} alt="" />
        </Link>
        <h4> {Name}</h4>
        <span>Logo Design</span>

    </div>
  )
}

export default LogoCard