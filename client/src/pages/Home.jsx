import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomFeatures from '../components/BottomFeatures'
import Footer from '../components/Footer'
import Contact from './Contact'


const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories />
      <BestSeller />
      <BottomFeatures />
      
    </div>
  )
}

export default Home
