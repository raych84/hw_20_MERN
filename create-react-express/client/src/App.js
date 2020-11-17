import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />       
       <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
        
           
      </Switch>
    </div>
  </Router>
  );
}
export default App;
