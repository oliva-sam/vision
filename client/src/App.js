import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import { UserBoard } from "./pages/userBoard";
import { NoBoard } from "./pages/noBoard";
import { NotFound } from "./pages/notFound";
import "./index.css"

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route exact path="/user/:username">
          <UserBoard></UserBoard>
        </Route>

        <Route exact path="/nouser">
          <NoBoard></NoBoard>
        </Route>

        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
