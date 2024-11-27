import React from 'react'
import './Homepage.css'
import HomeNavbar from './navbar';
import ProfileContainer from './profiles-container/profilesContainer'
const Homepage = () => {
  return (
    <div className="home-page-container">
      <HomeNavbar/>
      <ProfileContainer/>
    </div>
  )
}

export default Homepage
