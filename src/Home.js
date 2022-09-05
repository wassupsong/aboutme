import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const canvas = useRef();

  useEffect(() => {
    let title = document.querySelectorAll("h1");
    title.forEach((el, i) => {
      el.style.animationDelay = i * 0.5 + "s";
    });
  }, []);

  const moveContent = (event) => {
    const ctx = event.target.getContext("2d");
    const x = event.clientX - ctx.canvas.offsetLeft;
    if (x > canvas.current.offsetWidth / 2) {
      navigate("/Skill");
    }
  };

  return (
    <article className="Home">
      <canvas onClick={moveContent} ref={canvas}></canvas>
      <h1>안녕하세요,</h1>
      <h1>FrontEnd Web Engineer</h1>
      <h1>송화섭 입니다. 😄</h1>
    </article>
  );
};

export default Home;
