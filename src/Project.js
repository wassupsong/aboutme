import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
  }, []);

  return (
    <article className="Project">
      <h1>Project</h1>
      <div></div>
    </article>
  );
};

export default Project;
