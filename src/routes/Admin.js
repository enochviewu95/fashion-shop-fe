import React from 'react'
import NavigationBar from '../components/widgets/NavigationBar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <>
    <NavigationBar/>
    <Outlet/>
    </>
  )
}
