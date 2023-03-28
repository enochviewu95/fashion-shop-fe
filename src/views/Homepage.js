import React from 'react'
import NavigationBar from '../components/widgets/NavigationBar'
import HeroComponent from '../components/widgets/HeroComponent'
import FeatureSection from '../components/sections/FeatureSection'
import ProductSection from '../components/sections/ProductSection'


function Homepage(){
  return (
    <div>
      <NavigationBar/>
      <HeroComponent/>
      <ProductSection/>
      <FeatureSection/>
    </div>
  )
}

export default Homepage