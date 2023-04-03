const Card = ({ item }) => {
	
	return (			
		<div className='card-body text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
			<a href={item.link} target={'_blank'}>
              <img className="" src={item.imgurl} alt='slaom' />
            </a>
		</div>
	);
};

export default Card;