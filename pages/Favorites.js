import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

function Favorites() {
  let favIds = useSelector((state) => state.favIds);
  const dispatch = useDispatch();

  const [moviesList, setMoviesList] = useState([]);

  let removeFav = (id) => {
    setMoviesList(moviesList.filter((el) => el.id != id));
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    let urls = favIds.map(
      (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=8855e44fe388e79ba94db676189dac39`
    );
    axios
      .all(urls.map((url) => axios.get(url).then((res) => res.data)))
      .then((resArray) => setMoviesList([...moviesList, ...resArray]));
  }, []);

  useEffect(() => {}, [favIds]);

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
              <Card.Title>{movie.title}</Card.Title>
              <button
                className={"btn-fav active"}
                onClick={() => removeFav(movie.id)}
              ></button>
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
}

export default Favorites;
