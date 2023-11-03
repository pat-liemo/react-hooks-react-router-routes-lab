import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
