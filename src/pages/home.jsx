import React from 'react'
import Hero from '../components/sections/hero'
import NavBar from '../components/navigation/navbar'
import Intro from '../components/sections/intro';
import Review from '../components/sections/review';


export default function Home() {
  return (
    <div className=' '>
        <NavBar/>
      <Hero/>
      <Intro/>
      <Review />
    </div>
  )
}
