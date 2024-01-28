import React from 'react'
import './Portfolio.css'
import '../../Assest/Css/Navigation.css'
import Navigation from '../../Components/Navigation'

import LogoCard from './LogoCard'
import LogoData from './Logo.json'

const LogoPortfolio = () => {
  return (
    <>
      <div className="portfolio">
        <Navigation
          Navigation1='Home'
          Navigation2='Portfolio'
          Navigation3='Logo Design'
          Section='Logo Design'
        />
        <div className="portfolio-aside row">
          {
            LogoData.map((jsonData) => (

              <LogoCard
                key={jsonData.id}
                LogoImg={jsonData.images}
                Name={jsonData.name}
              
              />

            ))
          }
        </div>

      </div>
    </>
  )
}

export default LogoPortfolio