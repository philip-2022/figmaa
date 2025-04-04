// import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Navbar/Hero'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <div className='pt-5'>
        <Hero />
        <Footer />
        </div>
       
    </div>
  )
}

export default Home