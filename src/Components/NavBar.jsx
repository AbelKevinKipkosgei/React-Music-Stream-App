import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Albums">Albums</NavLink>
      <NavLink to="/Artists">Artists</NavLink>
    </nav>
  );
}
export default NavBar;
