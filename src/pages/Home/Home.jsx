import React from 'react'
import Hero from '../../components/Hero/Hero'
import Videos from '../../components/Videos/Videos'
import Reviews from '../Reviews/Reviews'
import Team from '../Team/Team'

const Home = () => {
  return (
    <div className='container mx-auto'>
        <Hero/>
        <Videos/>
        <Reviews/>
        <Team/>
    </div>
  )
}

export default Home