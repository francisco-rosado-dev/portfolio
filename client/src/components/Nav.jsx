import './nav.css'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigationContent">
      <h1>Francisco Rosado</h1>
      <nav>
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/projects">Projects</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}