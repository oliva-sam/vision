import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import { UserBoard } from "./pages/userBoard";
import { NoBoard } from "./pages/noBoard";

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route path="/user">
          <UserBoard></UserBoard>
        </Route>

        <Route path="/nouser">
          <NoBoard></NoBoard>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
