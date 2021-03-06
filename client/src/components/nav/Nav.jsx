import './nav.css'
import { NavLink } from "react-router-dom";

export default function Nav() {

  return (
    <div className="navigationContent">
      <NavLink className="name" to="/">Francisco Rosado</NavLink>
      <nav className="navigationContainer">

        <NavLink className="dashboard-selector" activeClassName='active-selector' exact to="/">Home</NavLink>
        <NavLink className="dashboard-selector" activeClassName='active-selector' to="/about">About</NavLink>
        <NavLink className="dashboard-selector" activeClassName='active-selector' to="/projects">Projects</NavLink>
        <NavLink className="dashboard-selector" activeClassName='active-selector' to="/contact" >Contact</NavLink>

      </nav>
    </div>
  )
}