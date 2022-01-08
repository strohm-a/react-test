import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import '../scss/App.scss';
import { Home } from './Home';
import { About } from './About';
import Grid from "./Grid";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <ul className={'header'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/grid">CSS Grid</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/grid">
              <Grid />
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
