import { IMG_URL } from "../../utils/Api";
const Card = ({ item }) => {
	const handleClick = () =>{
		const value = item
		console.log(value);
	}
	return (			
		<div className='w-[300px] mb-4 card-body text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
			<button onClick={handleClick} className="border-0">
				<a href={item.link} target={'_blank'}>
            	  <img className="" src={`${IMG_URL}${item.backdrop_path}`} alt='slaom' />
				  <h4 className="text-white">{item.title}</h4>
            	</a>
			</button>
		</div>
		
	);
};

export default Card;
