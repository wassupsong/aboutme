import { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
    const article = document.getElementsByClassName("Career")[0];
    [...article.children].forEach((el, i) => {
      setInterval(() => {
        if (i % 2 === 0) {
          el.style.animation = "slideRightFadeIn 3s forwards";
        } else {
          el.style.animation = "slideLeftFadeIn 3s forwards";
        }
      }, 500 * i);
    });
  }, []);
  return (
    <article className="Career">
      <h1>
        안녕하세요, 저는
        <ul>
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>0</li>
          <li>1</li>
        </ul>
        년차 웹 개발자 입니다.
      </h1>
      <div>
        <h2>2021.09</h2>
        <ol>
          <li>엠진 인터렉티브 입사(~2022.09)</li>
          <li>레드캡 기업출장 앱 개발(~2022.09)</li>
        </ol>
      </div>
      <div>
        <h2>2022.06</h2>
        <ol>
          <li>우리동네 소공인 유지보수</li>
          <li>하남시청 깔끔이 유지보수</li>
        </ol>
      </div>
    </article>
  );
};

export default Career;
