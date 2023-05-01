import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

// Components
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import UpcommingMovies from '../../Components/Homepage/newRelease'
import NewRelease from '../../Components/Homepage/allMovieSlide'
import Premiers from '../../Components/Homepage/premiers'


const navbar = () => {

  return (
    <div className='bg-gray-100'>

      {/* header */}
      <Navbar></Navbar>
      
     {/* homecontent */}
     <UpcommingMovies></UpcommingMovies>
      <NewRelease></NewRelease>
      <Premiers></Premiers>

      {/* footer */}
      <Footer></Footer>

    </div>
  )
}

export default navbar
