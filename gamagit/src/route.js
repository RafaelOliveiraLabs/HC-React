import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./repositories";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route patch="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
