import React from "react";
import movie6 from "../../assets/images/MoviePoster6.png";
import movie2 from "../../assets/cardImages/MoviePoster2.png";
import movie3 from "../../assets/cardImages/MoviePoster3.png";
import movie4 from "../../assets/cardImages/MoviePoster4.png";
import movie5 from "../../assets/cardImages/MoviePoster5.png";
import Card from "../Card/Card";
const films = [
  {
    imgurl: movie2,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie4,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie6,
    link: "https://www.netflix.com/uz/",
  },
  
  {
    imgurl: movie5,
    link: "https://www.netflix.com/uz/",
  },
  {
    imgurl: movie3,
    link: "https://www.netflix.com/uz/",
  },
  
  
  
];

    
const SecondSlider = () => {

  return (
    <div className="ml-8 mt-10">
      <h3 className="text-xl  text-white">Gündemdekiler</h3>
      <div className="flex gap-x-4 mt-4">
        {films.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SecondSlider;
