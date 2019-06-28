import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from 'Posts'
import About from 'About'

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Route path="/" exact component={Posts} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
