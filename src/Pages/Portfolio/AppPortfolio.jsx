import React from 'react'

import './Portfolio.css'
import '../../Assest/Css/Navigation.css'
import Navigation from '../../Components/Navigation'

import AppCard from './AppCard'
import AppData from './App.json'

const AppPortfolio = () => {
  return (
    <div className="portfolio">
    <Navigation
      Navigation1='Home'
      Navigation2='Portfolio'
      Navigation3='App Dewelopment'
      Section='App Dewelopment'
    />
    <div className="portfolio-aside row">
      {
        AppData.map((jsonData) => (

          <AppCard
            key={jsonData.id}
            AppImg={jsonData.images}
            Name={jsonData.name}
          
          />

        ))
      }
    </div>



  </div>
  )
}

export default AppPortfolio