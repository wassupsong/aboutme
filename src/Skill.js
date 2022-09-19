import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
  }, []);
  return (
    <article className="Skill">
      <h1>Skill</h1>
    </article>
  );
};

export default Skill;
