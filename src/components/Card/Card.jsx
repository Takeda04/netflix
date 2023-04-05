import { IMG_URL } from "../../utils/Api";
const Card = ({ item }) => {
	
	return (			
		<div className='w-[300px] mb-4 card-body text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
			<a href={item.link} target={'_blank'}>
              <img className="" src={`${IMG_URL}${item.backdrop_path}`} alt='slaom' />
            </a>
		</div>
		
	);
};

export default Card;
