import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

function Movies(props) {
  // state
  const [moviesList, setMoviesList] = useState([]);

  const favIds = useSelector((state) => state.favIds);
  const dispatch = useDispatch();

  let isFav = (id) => {
    return favIds.find((el) => el === id);
  };

  let toggleFav = (id) => {
    isFav(id)
      ? dispatch({ type: "REMOVE", payload: id })
      : dispatch({ type: "ADD", payload: id });
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8855e44fe388e79ba94db676189dac39"
      )
      .then((res) => setMoviesList(res.data.results));
  }, []);
  return (
    <CardGroup>
      {moviesList.map((movie) => {
        return (
          <Card key={movie.id}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
            <Card.Body>
              <Card.Title>
                <Link to={`/movie/${movie.id}`} className="nav-link">
                  {movie.title}
                </Link>
              </Card.Title>
              <button
                className={`btn-fav ${isFav(movie.id) ? "active" : ""}`}
                onClick={() => toggleFav(movie.id)}
              ></button>
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
}

export default Movies;
