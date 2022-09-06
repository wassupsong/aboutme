import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const mainContainer = useRef();

  const clickDiv = (event) => {
    const cube = event.target.parentElement.id;
    if (cube === "about") navigate("/aboutme/About");
    if (cube === "career") navigate("/aboutme/Career");
    if (cube === "project") navigate("/aboutme/Project");
    if (cube === "skill") navigate("/aboutme/Skill");
  };
  const mouseOverEvent = (event) => {
    document.getElementById("textMessage").style.display = "none";
    const cube = event.target.parentElement;
    for (let i = 0; i < cube.children.length; i++) {
      cube.children[i].style.backgroundColor = "white";
    }
    if (cube.id === "about") document.getElementsByClassName("text_container")[0].style.backgroundColor = "black";
    if (cube.id === "career") document.getElementsByClassName("text_container")[1].style.backgroundColor = "black";
    if (cube.id === "project") document.getElementsByClassName("text_container")[2].style.backgroundColor = "black";
    if (cube.id === "skill") document.getElementsByClassName("text_container")[3].style.backgroundColor = "black";
  };
  const mouseOutEvent = (event) => {
    document.getElementById("textMessage").style.display = "flex";
    const cube = event.target.parentElement;
    for (let i = 0; i < cube.children.length; i++) {
      cube.children[i].style.backgroundColor = "white";
      cube.children[i].style.opacity = "1";
    }
    if (cube.id === "about") document.getElementsByClassName("text_container")[0].style.backgroundColor = "white";
    if (cube.id === "career") document.getElementsByClassName("text_container")[1].style.backgroundColor = "white";
    if (cube.id === "project") document.getElementsByClassName("text_container")[2].style.backgroundColor = "white";
    if (cube.id === "skill") document.getElementsByClassName("text_container")[3].style.backgroundColor = "white";
  };
  return (
    <div className="main">
      <h1 id="textMessage">안녕하세요, Web Engineer 송화섭입니다.</h1>
      <div className="Home">
        <div className="text_container">
          <h1>ABOUT ➡</h1>
        </div>
        <div className="text_container">
          <h1>CAREER ➡</h1>
        </div>
        <div className="text_container">
          <h1>PROJECT ➡</h1>
        </div>
        <div className="text_container">
          <h1>SKILL ➡</h1>
        </div>
        <div className="home_container" ref={mainContainer}>
          <div onClick={clickDiv} id="about" className="cube" onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div onClick={clickDiv} id="career" className="cube" onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div onClick={clickDiv} id="project" className="cube" onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div onClick={clickDiv} id="skill" className="cube" onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
