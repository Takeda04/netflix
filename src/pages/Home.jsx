import React from 'react'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ThirdSlider from '../components/Slider/ThirdSlider'
import SecondSlider from '../components/Slider/SecondSlider'
import Slider from '../components/Slider/Slider'
const Home = () => {
  return (
    <div className=''>
        <Header/>
          <Body/>
          <Slider/>
          <SecondSlider/>
          <ThirdSlider/>
       <Footer/>
    </div>
  )
}

export default Home