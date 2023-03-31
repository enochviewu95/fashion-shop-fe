import React, { useContext } from 'react'
import HeroComponent from '../components/widgets/HeroComponent'
import FeatureSection from '../components/sections/FeatureSection'
import CategorySection from '../components/sections/CategorySection'
import ProductSection from '../components/sections/ProductSection'
import PromoSection from '../components/sections/PromoSection'
import StatsSection from '../components/sections/StatsSection'
import { ThemeContext } from '../themeContext'


export default function HomepageView(){

  const theme = useContext(ThemeContext)
  const {lightBackground,deepBackground} = theme

  return (
    <div>
      <HeroComponent/>
      <CategorySection backgroundColor={lightBackground}/>
      <ProductSection backgroundColor={deepBackground}/>
      <PromoSection backgroundColor={lightBackground}/>
      <FeatureSection backgroundColor={deepBackground}/>
      <StatsSection backgroundColor={lightBackground}/>
    </div>
  )
}
