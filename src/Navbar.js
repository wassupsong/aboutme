import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar_cube">
            <div className="navbar_square"></div>
            <div className="navbar_square"></div>
            <div className="navbar_square"></div>
            <div className="navbar_square"></div>
            <div className="navbar_square"></div>
            <div className="navbar_square"></div>
          </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
