import React from 'react'

import './Portfolio.css'
import '../../Assest/Css/Navigation.css'
import Navigation from '../../Components/Navigation'

import WebCard from './WebCard'
import WebData from './WebDesign.json'

const WebDesignPortfolio = () => {

  return (
    <div className="portfolio">
    <Navigation
      Navigation1='Home'
      Navigation2='Portfolio'
      Navigation3='Web Design'
      Section='Web Design'
    />
    <div className="portfolio-aside row">
      {
        WebData.map((jsonData) => (

          <WebCard
            key={jsonData.id}
            WebImg={jsonData.images}
            Name={jsonData.name}
          
          />

        ))
      }
    </div>



  </div>
  )
}

export default WebDesignPortfolio