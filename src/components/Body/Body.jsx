import React from "react";
import bodyImg from "../../assets/images/MoviePoster.png";
import movieName from "../../assets/images/MovieName.png";
import playBtn from "../../assets/images/Vector.png";
import undovBtn from "../../assets/images/undov.png";
import top10 from '../../assets/images/Top10Badge.png';
const Body = () => {
  return (
    <div >
      <div>
        <img className="w-[100%]" src={bodyImg} alt="" />
        <img
          className="absolute mt-[-600px] ml-12 z-20"
          src={movieName}
          alt=""
        />
      </div>
      <div className="absolute text-white mt-[-470px] ml-16 ">
        <div className="flex items-center ">
            <img  src={top10} alt="" />
            <p className=" text-2xl ml-8">Türkiye’de Bugün 4 Numara</p>
        </div>
        <p className=" w-[400px] mt-4">
          Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş
          dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir
          kızla karşılaşır ve hayatı değişir.
        </p>
        <div className="flex">
          <button className=" flex items-center gap-x-2 mt-8 bg-white hover:bg-white focus:ring-4 focus:ring-primary-300 font-medium rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red  focus:outline-none dark:focus:ring-red-600">
            <img className="w-3.5" src={playBtn} alt="" />
            <p className="text-black">Oynat</p>
          </button>
          <button className=" flex items-center gap-x-2 mt-8 bg-opacity-30 bg-white  focus:ring-4 focus:ring-primary-300 font-medium rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red  focus:outline-none dark:focus:ring-red-600">
            <img className="w-3.5 " src={undovBtn} alt="" />
            <p className="text-white">Daha Fazla Bilgi</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
