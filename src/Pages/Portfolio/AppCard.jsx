import React from 'react'
import { Link } from 'react-router-dom'

const AppCard = ({AppImg, Name}) => {

  return (
    <div className=' portfolio-card col-12 col-md-6 col-lg-4'>
        <Link>
        <img src={AppImg} alt="" />
        </Link>
        <h4> {Name}</h4>
        <span>App Dewelopment</span>

    </div>
  )
}

export default AppCard