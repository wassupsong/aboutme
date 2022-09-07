import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  return (
    <article className="Career">
      <div>
        <h2>2021.09</h2>
        <ol>
          <li>엠진 인터렉티브 입사</li>
          <li>레드캡 기업출장 앱 개발</li>
        </ol>
      </div>
      <div>
        <h2>2022.06</h2>
        <ol>
          <li>우리동네 소공인 유지보수</li>
          <li>하남시청 깔끔이 유지보수</li>
        </ol>
      </div>
      {/* <div>
        <h2>2021</h2>
        <ol>
          <li>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</li>
          <li>하이하이하이하이하이하이하이하이하이하이하이하이하이</li>
          <li>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</li>
          <li>하이하이하이하이하이하이하이하이하이하이하이하이하이</li>
        </ol>
      </div>
      <div>
        <h2>2022</h2>
        <ol>
          <li>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</li>
          <li>하이하이하이하이하이하이하이하이하이하이하이하이하이</li>
          <li>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</li>
          <li>하이하이하이하이하이하이하이하이하이하이하이하이하이</li>
        </ol>
      </div> */}
    </article>
  );
};

export default Career;
