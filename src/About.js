import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.getElementsByClassName("topNavbar")[0].style.display = "block";
  }, []);
  return (
    <article className="About">
      <h1>about</h1>
    </article>
  );
};

export default About;
