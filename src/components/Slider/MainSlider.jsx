import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL2 } from "../../utils/Api";
import ky from "ky";
import MainCard from "../Card/MainCard";

const films = await ky.get(BASE_URL2).json();
 const movies = films.results;
export default class SimpleSlider extends Component {
    state = {
        movies: []
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true
            
        };
        console.log(settings);
        return (
            <div className="px-[50px] mt-[680px]">

                <Slider {...settings} className="">
                         {movies.map((item, i) => (
                           <MainCard key={i} item={item}/>
                         ))}
                  <div></div>
                  <div></div>
                </Slider>
            </div>
        );
    }
}