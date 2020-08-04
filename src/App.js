import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
