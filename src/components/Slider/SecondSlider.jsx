import React from "react";
import Card from "../Card/Card";
import ky from "ky";
import { BASE_URL2 } from "../../utils/Api";

const films = await ky.get(BASE_URL2).json();
const movies = films.results;
const SecondSlider = () => {

  return (
    <div className="absolute mt-[150px] ml-8">
      <h3 className="text-xl  text-white">Kemal, İzlemeye Devam Et</h3>
      <div className="flex gap-x-4 mt-4">
        {movies.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SecondSlider;
