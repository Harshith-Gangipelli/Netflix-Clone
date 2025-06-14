import React from 'react'
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect ,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const navigate=useNavigate();
  const {id}=useParams();
const [apiData, setApiData] = useState({
  name: '',
  key: '',
  published_at: '',
  type: ''
});

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGFlMWVjZWIwZDgwNjcxNjg0ZDE1YWM4YjkyMTRhYSIsIm5iZiI6MTc0NTY0OTY1Ny40Niwic3ViIjoiNjgwYzdmZjk4MDc3ZDI1ODAxMzc3OTI4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LL0AAO13W60zRbfAlckMZE3hyb4eXaM_l-MzyPmqDUM'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, []);
 

    return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" className='' onClick={()=>{
        navigate(-2);
      }}/>
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
} 
export default Player