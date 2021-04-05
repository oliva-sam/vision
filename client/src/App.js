import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import { UserBoard } from "./pages/userBoard";


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route exact path="/user">
          <UserBoard></UserBoard>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
