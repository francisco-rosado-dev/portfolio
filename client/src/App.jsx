import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </div>
    </div>
  );
}

export default App;
