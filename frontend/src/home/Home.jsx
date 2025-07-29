import React from 'react'
import Navbar from '../components/Navbar'
import Banners from '../components/Banners'
import FeaturedBooks from '../components/FreeBook' // Renamed import for clarity
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Banners/>
      <FeaturedBooks/>
      <Footer/>
    </>
  )
}

export default Home