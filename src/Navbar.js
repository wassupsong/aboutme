import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
  }, []);

  const moveHome = () => {
    navigate("/aboutme/");
  };
  return (
    <nav className="navbar">
      <div className="navbar_cube" onClick={moveHome}>
        <div className="navbar_square"></div>
        <div className="navbar_square"></div>
        <div className="navbar_square"></div>
        <div className="navbar_square"></div>
        <div className="navbar_square"></div>
        <div className="navbar_square"></div>
      </div>
      <div className="navbar_menu">
        <ul>
          <li>
            <a href="#">
              Github <FaGithub />
            </a>
          </li>
          <li>
            <a href="#">
              Mail <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="#">
              Instagram <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
