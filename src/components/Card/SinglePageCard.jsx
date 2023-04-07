import ky from "ky";
import { useEffect, useState } from "react";
import { BASE_URL4, IMG_URL } from "../../utils/Api";
import { useParams } from "react-router";

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

  return (
    <div className="w-[300px] mb-4 card-body text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <img className="" src={`${IMG_URL}${item?.backdrop_path}`} alt="slaom" />
      <h4 className="text-white">{item?.title}</h4>
    </div>
  );
};

export default SinglePageCard;
