import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Calendar from '../../Components/Calendar/Calendar'
import HomeMenu from '../../Components/HomeMenu/HomeMenu'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <div className='bodyHome'>
        <HomeMenu />
        <Calendar />
      </div>
    </div>
  )
}

export default Home
