import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/widgets/NavigationBar'
import NewLetterSection from '../components/sections/NewsLetterSection'

export default function Client() {
  return (
    <>
          <NavigationBar/>
          <Outlet/>
          <NewLetterSection/>
    </>
  )
}
