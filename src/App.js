import "./App.css";
import Dashboard from "./components/dashboard/Dashboard.js";
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";
import React from "react";

//App Component is the main component in React which acts as a container for all other components

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={Dashboard} />
          <Redirect from="/" to="/admin/Home"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
