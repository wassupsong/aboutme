import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const curPage = location.pathname;
    const link = document.querySelectorAll("a");
    if (curPage === "/aboutme/" || curPage === "/aboutme") link[0].style.backgroundImage = "linear-gradient(to right, #868f96 0%, #596164 100%)";
    else link[0].style.backgroundImage = "none";
    if (curPage === "/aboutme/Career") link[1].style.backgroundImage = "linear-gradient(to right, #868f96 0%, #596164 100%)";
    else link[1].style.backgroundImage = "none";
    if (curPage === "/aboutme/Project") link[2].style.backgroundImage = "linear-gradient(to right, #868f96 0%, #596164 100%)";
    else link[2].style.backgroundImage = "none";
    if (curPage === "/aboutme/Skill") link[3].style.backgroundImage = "linear-gradient(to right, #868f96 0%, #596164 100%)";
    else link[3].style.backgroundImage = "none";
  }, [location]);
  return (
    <nav className="topNavbar">
      <ul>
        <li>
          <Link to="/aboutme/"></Link>
        </li>
        <li>
          <Link to="/aboutme/Career"></Link>
        </li>
        <li>
          <Link to="/aboutme/Project"></Link>
        </li>
        <li>
          <Link to="/aboutme/Skill"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
