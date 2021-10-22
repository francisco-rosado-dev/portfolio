import './App.css';
import { Route } from 'react-router-dom'
import Home from './screens/home/Home'
import About from './screens/about/About'
import Projects from './screens/projects/Projects'
import Contact from './screens/contact/Contact'
import Nav from './components/nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
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
