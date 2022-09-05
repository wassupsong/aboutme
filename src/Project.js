import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const canvas = useRef();
  const moveContent = (event) => {
    const ctx = event.target.getContext("2d");
    const x = event.clientX - ctx.canvas.offsetLeft;
    if (x > canvas.current.offsetWidth / 2) {
      navigate("/Career");
    } else {
      navigate("/Skill");
    }
  };
  return (
    <article className="Project">
      <canvas onClick={moveContent} ref={canvas}></canvas>
      <h1>Project</h1>
    </article>
  );
};

export default Project;
