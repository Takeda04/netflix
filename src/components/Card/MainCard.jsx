import { IMG_URL } from "../../utils/Api"
import { useNavigate } from "react-router"
const MainCard = ({item}) => {
  const navigate = useNavigate();
  const handleOpen = () =>{
    
    
    navigate('/singlepage')
   
  }
  return (
    <div className='w-[300px]  mb-4 card-body text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
      
			<button onClick={handleOpen} className="border-0">
        <img className="" src={`${IMG_URL}${item.backdrop_path}`} alt='slaom' />
        <h3 className="text-white mt-2">{item.title}</h3>
        <p className="text-slate-500 mt-2">{item.release_date}</p>
      </button>
		</div>
  )
}

export default MainCard