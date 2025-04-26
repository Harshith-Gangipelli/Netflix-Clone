import React,{useEffect, useRef,useState} from 'react'
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data.js';
import {Link} from 'react-router-dom';

const TitleCards = ({title,category}) => {
const [apidata,setApidata] = useState([]); // State to store the API dat
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGFlMWVjZWIwZDgwNjcxNjg0ZDE1YWM4YjkyMTRhYSIsIm5iZiI6MTc0NTY0OTY1Ny40Niwic3ViIjoiNjgwYzdmZjk4MDc3ZDI1ODAxMzc3OTI4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LL0AAO13W60zRbfAlckMZE3hyb4eXaM_l-MzyPmqDUM'
  }
};

const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
  
}

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApidata(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handleWheel );
},[]);
  return (
    <div className='titlecards'>
        <h2>{title?title:"Popular on Netflix"} </h2>
        <div className="card-list" ref={cardsRef}>
          {apidata.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt='' />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
          </div>
    </div>
  )
}

export default TitleCards