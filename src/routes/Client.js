import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/widgets/NavigationBar'
import NewLetterSection from '../components/sections/NewsLetterSection'
import { ThemeContext } from '../themeContext'

export default function Client() {
  const {primaryColor, primaryTextColor,secondaryTextColor} = useContext(ThemeContext)
  return (
    <>
          <NavigationBar backgroundColor={primaryColor} primaryTextColor={primaryTextColor} secondaryTextColor={secondaryTextColor}/>
          <Outlet/>
          <NewLetterSection  backgroundColor={primaryColor} primaryTextColor={primaryTextColor} secondaryTextColor={secondaryTextColor}/>
    </>
  )
}
