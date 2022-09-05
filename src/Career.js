import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  const canvas = useRef();
  const moveContent = (event) => {
    const ctx = event.target.getContext("2d");
    const x = event.clientX - ctx.canvas.offsetLeft;
    if (x > canvas.current.offsetWidth / 2) {
      navigate("/Project");
    } else {
      navigate("/");
    }
  };
  return (
    <article className="Career">
      <canvas onClick={moveContent} ref={canvas}></canvas>
      <h1>Career</h1>
    </article>
  );
};

export default Career;
