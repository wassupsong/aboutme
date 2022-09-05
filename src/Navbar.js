import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const curPage = location.pathname;
    console.log(curPage);
    const link = document.querySelectorAll("a");
    if (curPage === "/") link[0].style.backgroundImage = "linear-gradient(135deg,#a6c0fe,#f68084)";
    else link[0].style.backgroundImage = "none";
    if (curPage === "/Career") link[1].style.backgroundImage = "linear-gradient(135deg,#f68084,#a6c0fe)";
    else link[1].style.backgroundImage = "none";
    if (curPage === "/Project") link[2].style.backgroundImage = "linear-gradient(135deg,#a6c0fe,#f68084)";
    else link[2].style.backgroundImage = "none";
    if (curPage === "/Skill") link[3].style.backgroundImage = "linear-gradient(135deg,#f68084,#a6c0fe)";
    else link[3].style.backgroundImage = "none";
  }, [location]);
  return (
    <nav className="topNavbar">
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/Career"></Link>
        </li>
        <li>
          <Link to="/Project"></Link>
        </li>
        <li>
          <Link to="/Skill"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
