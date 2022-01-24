import React, {  useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./MyNavbar";

// pages
import movies from "./pages/movies";
import favorites from "./pages/Favorites";
import TopRated from "./pages/TopRated";
import login from "./pages/login";
import register from "./pages/register";
import SingleMovie from "./pages/SingleMovie";

// context
import { LangContext } from "./context/LangContext";

function App() {
  const [lang,setLang] = useState('en')
  return (
    <LangContext.Provider value={{lang,setLang}}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path={"/"} component={movies} />
          <Route path={"/favorites"} component={favorites} />
          <Route path={"/top_rated"} component={TopRated} />
          <Route path={"/login"} component={login} />
          <Route path={"/register"} component={register} />
          <Route path={"/movie/:id?"} component={SingleMovie} />
        </Switch>
      </BrowserRouter>
    </LangContext.Provider>
  );
}

export default App;
