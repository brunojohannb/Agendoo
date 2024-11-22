import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Calendar from '../../Components/Calendar/Calendar'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Calendar />
    </div>
  )
}

export default Home
