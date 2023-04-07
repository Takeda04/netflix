import ky from "ky";
import { useEffect, useState } from "react";
import { BASE_URL4, IMG_URL } from "../../utils/Api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SinglePageCard = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  const handleFetch = async () => {
    const res = await ky.get(BASE_URL4).json();
    setItem(res?.results?.find((e) => +e?.id === +id));
  };

  useEffect(() => {
    handleFetch();
  }, []);
  console.log(item);

  return (
    <div className="text-center">
      <img className="w-[100%] block mx-auto" src={`${IMG_URL}${item?.backdrop_path}`} alt="slaom" />
      <h4 className=" mb-3 bg-slate-500 w-[50%] mx-auto rounded-xl mt-3">{item?.title}</h4>
      <p className="text-white w-[60%] mx-auto border-2 rounded-xl">{item?.overview}</p>
      <p className="text-slate-700 mt-3">{item?.release_date}</p>
      <button className="btn bg-red-500 text-white rounded-xl px-4 mt-5"><Link to={'/home'}>Back
      </Link></button>
    </div>
  );
};

export default SinglePageCard;
