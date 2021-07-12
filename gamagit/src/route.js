import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Repositories from "./repositories";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
