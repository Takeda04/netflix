import React, { useEffect } from "react";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ThirdSlider from "../components/Slider/ThirdSlider";
import SecondSlider from "../components/Slider/SecondSlider";
import Slider from "../components/Slider/Slider";
import MainSlider from "../components/Slider/MainSlider";


const Home = () => {
  
  return (
    <div>
      <Header/>
      <Body/>
      <Slider />
      <SecondSlider />
      <ThirdSlider />
      <MainSlider />
      <Footer />
    </div>
    
  );
};

export default Home;
