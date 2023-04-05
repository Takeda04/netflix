import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL4 } from "../../utils/Api";
import ky from "ky";
import MainCard from "../Card/MainCard";

export default class SimpleSlider extends Component {
    state = {
        movies: []
    }

    async componentDidMount() {
        const films = await ky.get(BASE_URL4).json();
        const movies = films.results;
        this.setState({ movies });
    }

    render() {
        const { movies } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div className="px-[50px] mt-[680px]">
                <h2 className="text-white text-2xl mb-4">Netflix Orijinal İçerikleri</h2>
                <Slider {...settings} className="">
                         {movies.map((item, i) => (
                           <MainCard key={i} item={item}/>
                         ))}
                </Slider>
            </div>
        );
    }
}
