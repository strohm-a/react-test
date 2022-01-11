import { Component } from 'react';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import '../scss/App.scss';
import { Home } from './Home';
import { About } from './About';
import { Grid } from "./Grid";


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
      <BrowserRouter>
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
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/grid" element={<Grid />}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
