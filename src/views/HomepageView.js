import React from 'react'
import NavigationBar from '../components/widgets/NavigationBar'
import HeroComponent from '../components/widgets/HeroComponent'
import FeatureSection from '../components/sections/FeatureSection'
import CategorySection from '../components/sections/CategorySection'
import ProductSection from '../components/sections/ProductSection'
import PromoSection from '../components/sections/PromoSection'
import NewLetterSection from '../components/sections/NewsLetterSection'
import StatsSection from '../components/sections/StatsSection'


export default function HomepageView(){
  return (
    <div>
      <HeroComponent/>
      <CategorySection/>
      <ProductSection/>
      <PromoSection/>
      <FeatureSection/>
      <StatsSection/>
    </div>
  )
}
