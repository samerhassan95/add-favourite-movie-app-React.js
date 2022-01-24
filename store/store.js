import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import axios from "axios";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const getTopRatedMovies = () => (dispatch) => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8855e44fe388e79ba94db676189dac39"
    )
    .then(
      (res) =>
        dispatch({ type: "GET_Top_Rated_MOVIES", payload: res.data.results }),
      (err) => console.log(err)
    );
};

export default store;
