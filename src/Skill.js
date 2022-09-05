import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Skill = () => {
  const navigate = useNavigate();
  const canvas = useRef();
  const moveContent = (event) => {
    const ctx = event.target.getContext("2d");
    const x = event.clientX - ctx.canvas.offsetLeft;
    if (x < canvas.current.offsetWidth / 2) {
      navigate("/aboutme/Project");
    }
  };
  return (
    <article className="Skill">
      <canvas onClick={moveContent} ref={canvas}></canvas>
      <h1>Skill</h1>
    </article>
  );
};

export default Skill;
