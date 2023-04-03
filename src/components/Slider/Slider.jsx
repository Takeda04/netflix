import React from "react";
import movie1 from "../../assets/cardImages/MoviePoster1.png";
import movie2 from "../../assets/cardImages/MoviePoster2.png";
import movie3 from "../../assets/cardImages/MoviePoster3.png";
import movie4 from "../../assets/cardImages/MoviePoster4.png";
import movie5 from "../../assets/cardImages/MoviePoster5.png";
import Card from "../Card/Card";
const films = [
  {
    imgurl: movie1,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie2,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie3,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie4,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie5,
    link: "https://www.netflix.com/uz/",
  },
];

    
const Slider = () => {

  return (
    <div className="absolute mt-[-100px] ml-8">
      <h3 className="text-xl  text-white">Netflix'te Popüler</h3>
      <div className="flex gap-x-4 mt-4">
        {films.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
