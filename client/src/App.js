import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import { UserBoard } from "./pages/userBoard";
import { NoBoard } from "./pages/noBoard";
import { NotFound } from "./pages/notFound";

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route path="/user/:username">
          <UserBoard></UserBoard>
        </Route>

        <Route path="/nouser">
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
