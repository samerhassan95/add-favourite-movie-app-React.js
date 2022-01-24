import {React, useState,useEffect} from "react";
import axios from 'axios'

function SingleMovie(props) {
  const [movieDetails, setMovieDetails] = useState({});
  let id = props.match.params.id
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8855e44fe388e79ba94db676189dac39`
      )
      .then((res) => setMovieDetails(res.data));
      console.log(props.match.params.id)
  }, []);
  return<>
<img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}/>
  <h2>{movieDetails.title} </h2>
  <p>{movieDetails.overview}</p>
  </> 
}

export default SingleMovie;
