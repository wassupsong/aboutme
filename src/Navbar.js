import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { send } from "emailjs-com";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formClass, setFormClass] = useState("navbar_mailform");
  const [mailData, setMailData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
  }, []);

  const moveHome = () => {
    navigate("/aboutme/");
  };

  const clickMailBtn = (event) => {
    event.preventDefault();
    document.getElementsByClassName("navbar_mailform_dimm")[0].style.display = "block";
    document.getElementsByClassName("navbar_mailform")[0].style.display = "flex";
    setFormClass("navbar_mailform in");
    setTimeout(() => {
      document.querySelector("form").style.animation = "fadeIn .5s forwards";
    }, 1000);
  };

  const closeMailForm = () => {
    document.getElementsByClassName("navbar_mailform_dimm")[0].style.animation = "fadeOut .5s forwards";
    document.getElementsByClassName("navbar_mailform")[0].style.animation = "fadeOut .5s forwards";
    document.querySelector("form").style.animation = "fadeOut .5s forwards";
    setTimeout(() => {
      document.getElementsByClassName("navbar_mailform_dimm")[0].style.display = "none";
      document.getElementsByClassName("navbar_mailform")[0].style.display = "none";
      document.getElementsByClassName("navbar_mailform_dimm")[0].style.animation = "none";
      document.getElementsByClassName("navbar_mailform")[0].style.animation = "none";
      document.querySelector("form").style.animation = "none";
    }, 500);
    setFormClass("navbar_mailform");
    setMailData({
      from_name: "",
      from_email: "",
      from_phone: "",
      message: "",
    });
  };

  const sendMail = (event) => {
    event.preventDefault();
    if (mailValidation() !== "complete") {
      alert(mailValidation());
      return;
    }
    document.getElementsByClassName("loading_dimm")[0].style.display = "block";
    send(process.env.REACT_APP_EMAILJS_SERVICE_ID, "template_y9oe4cd", mailData)
      .then(() => {
        document.getElementsByClassName("loading_dimm")[0].style.display = "none";
        alert("????????? ?????????????????????. ?????? ?????? ?????? ????????????????????????! ???????????????!");
        closeMailForm();
      })
      .catch(() => {
        document.getElementsByClassName("loading_dimm")[0].style.display = "none";
        alert("?????? ????????? ??????????????????. ?????? ??????????????????.");
        closeMailForm();
      });
  };

  const clickInstaBtn = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setMailData({
      ...mailData,
      [name]: value,
    });
  };

  const mailValidation = () => {
    let check = "complete";
    if (!mailData.message) check = "????????? ??????????????????!";
    if (!mailData.from_phone) check = "??????????????? ??????????????????!";
    if (!mailData.from_email) check = "???????????? ??????????????????!";
    if (!mailData.from_name) check = "????????? ??????????????????!";
    return check;
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
            <a href="#" onClick={() => window.open("https://github.com/wassupsong")}>
              <p>Github</p>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#" onClick={clickMailBtn}>
              <p>Mail</p>
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="#" onClick={clickInstaBtn}>
              <p>Instagram</p>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar_mailform_dimm" onClick={closeMailForm}></div>
      <div className={formClass}>
        <h1>Contact Me</h1>
        <form onSubmit={sendMail}>
          <div>
            <label htmlFor="mailName">* ??????</label>
            <input type="text" name="from_name" id="mailName" value={mailData.from_name} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor="mailEmail">* ?????????</label>
            <input type="text" name="from_email" id="mailEmail" value={mailData.from_email} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor="mailPhone">* ????????????</label>
            <input type="text" name="from_phone" id="mailPhone" value={mailData.from_phone} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor="mailMessage">* ??????</label>
            <textarea name="message" id="mailMessage" value={mailData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">?????? ?????????</button>
        </form>
      </div>
      <div className="loading_dimm">
        <h2>Loading...</h2>
      </div>
    </nav>
  );
};

export default Navbar;
