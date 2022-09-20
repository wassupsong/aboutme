import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const mainContainer = useRef();
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "none";
  }, []);
  const clickCube = (event) => {
    event.stopPropagation();
    document.getElementById("textMessage").style.display = "none";
    const cube = event.target.parentElement;
    if (cube.id === "about") {
      document.getElementsByClassName("text_container")[0].style.display = "flex";
      setAboutStyle();
    } else {
      document.getElementsByClassName("text_container")[0].style.display = "none";
      resetAboutStyle();
    }
    if (cube.id === "career") {
      document.getElementsByClassName("text_container")[1].style.display = "flex";
      setCareerStyle();
    } else {
      document.getElementsByClassName("text_container")[1].style.display = "none";
      resetCareerStyle();
    }

    if (cube.id === "project") {
      document.getElementsByClassName("text_container")[2].style.display = "flex";
      setProjectStyle();
    } else {
      document.getElementsByClassName("text_container")[2].style.display = "none";
      resetProjectStyle();
    }
    if (cube.id === "skill") {
      document.getElementsByClassName("text_container")[3].style.display = "flex";
      setSkillStyle();
    } else {
      document.getElementsByClassName("text_container")[3].style.display = "none";
      resetSkillStyle();
    }
  };
  const setAboutStyle = () => {
    const about = document.getElementsByClassName("cube")[0];
    about.style.top = "-30%";
    about.style.left = "-30%";
    for (let i = 0; i < about.children.length; i++) {
      about.children[i].style.backgroundColor = "#E2E2E2";
      about.children[i].style.border = "#1b1d20 1px solid";
    }
  };

  const resetAboutStyle = () => {
    const about = document.getElementById("about");
    about.style.top = "0%";
    about.style.left = "0%";
    for (let i = 0; i < about.children.length; i++) {
      about.children[i].style.backgroundColor = "#1b1d20";
      about.children[i].style.border = "#E2E2E2 1px solid";
    }
  };

  const setCareerStyle = () => {
    const career = document.getElementById("career");
    career.style.top = "-30%";
    career.style.left = "80%";
    for (let i = 0; i < career.children.length; i++) {
      career.children[i].style.backgroundColor = "#E2E2E2";
      career.children[i].style.border = "#1b1d20 1px solid";
    }
  };
  const resetCareerStyle = () => {
    const career = document.getElementById("career");
    career.style.top = "0%";
    career.style.left = "50%";
    for (let i = 0; i < career.children.length; i++) {
      career.children[i].style.backgroundColor = "#1b1d20";
      career.children[i].style.border = "#E2E2E2 1px solid";
    }
  };
  const setProjectStyle = () => {
    const project = document.getElementById("project");
    project.style.top = "80%";
    project.style.left = "-30%";
    for (let i = 0; i < project.children.length; i++) {
      project.children[i].style.backgroundColor = "#E2E2E2";
      project.children[i].style.border = "#1b1d20 1px solid";
    }
  };
  const resetProjectStyle = () => {
    const project = document.getElementById("project");
    project.style.top = "50%";
    project.style.left = "0%";
    for (let i = 0; i < project.children.length; i++) {
      project.children[i].style.backgroundColor = "#1b1d20";
      project.children[i].style.border = "#E2E2E2 1px solid";
    }
  };
  const setSkillStyle = () => {
    const skill = document.getElementById("skill");
    skill.style.top = "80%";
    skill.style.left = "80%";
    for (let i = 0; i < skill.children.length; i++) {
      skill.children[i].style.backgroundColor = "#E2E2E2";
      skill.children[i].style.border = "#1b1d20 1px solid";
    }
  };
  const resetSkillStyle = () => {
    const skill = document.getElementById("skill");
    skill.style.top = "50%";
    skill.style.left = "50%";
    for (let i = 0; i < skill.children.length; i++) {
      skill.children[i].style.backgroundColor = "#1b1d20";
      skill.children[i].style.border = "#E2E2E2 1px solid";
    }
  };

  const clickOther = (event) => {
    document.getElementById("textMessage").style.display = "flex";
    document.getElementsByClassName("text_container")[0].style.display = "none";
    document.getElementsByClassName("text_container")[1].style.display = "none";
    document.getElementsByClassName("text_container")[2].style.display = "none";
    document.getElementsByClassName("text_container")[3].style.display = "none";
    resetAboutStyle();
    resetCareerStyle();
    resetProjectStyle();
    resetSkillStyle();
  };

  return (
    <div className="main">
      <h1 id="textMessage">안녕하세요, Web Engineer 송화섭입니다.</h1>
      <div className="Home" onClick={clickOther}>
        <div className="text_container" onClick={() => navigate("/aboutme/About")}>
          <h1>ABOUT ➡</h1>
        </div>
        <div className="text_container" onClick={() => navigate("/aboutme/Career")}>
          <h1>CAREER ➡</h1>
        </div>
        <div className="text_container" onClick={() => navigate("/aboutme/Project")}>
          <h1>PROJECT ➡</h1>
        </div>
        <div className="text_container" onClick={() => navigate("/aboutme/Skill")}>
          <h1>SKILL ➡</h1>
        </div>
        <div className="home_container" ref={mainContainer}>
          <div onClick={clickCube} id="about" className="cube">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div onClick={clickCube} id="career" className="cube">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div onClick={clickCube} id="project" className="cube">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div onClick={clickCube} id="skill" className="cube">
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
