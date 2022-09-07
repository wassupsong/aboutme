import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "block";
  }, []);
  return (
    <article className="About">
      <div className="about_title">
        <h1>안녕하세요,</h1>
        <h1>나이 들어서도 개발하고 싶은 개발자 송화섭입니다.</h1>
      </div>
      <div className="about_content"></div>
    </article>
  );
};

export default About;
