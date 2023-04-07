import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import ky from "ky";
import { BASE_URL } from "../../utils/Api";


const Slider = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const films = await ky.get(BASE_URL).json();
      setMovies(films.results);
    };

    fetchData();
  }, []);

  return (
    <div className="absolute mt-[-100px] ml-8">
      <h3 className="text-xl  text-white">Netflix'te Popüler</h3>
      <div className="flex gap-x-4 mt-4">
        {movies.map((item, i) => (
          <Card key={i} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Slider;
