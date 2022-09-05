import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="topNavbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Skill">Skill</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Career">Career</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
