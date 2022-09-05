import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import Career from "./Career";

const routes = [
  { path: "/", orderNo: 0, Component: <Home style={{ position: "absoulte" }} /> },
  { path: "/Skill", orderNo: 1, Component: <Skill style={{ position: "absoulte" }} /> },
  { path: "/Project", orderNo: 2, Component: <Project style={{ position: "absoulte" }} /> },
  { path: "/Career", orderNo: 3, Component: <Career style={{ position: "absoulte" }} /> },
];

const AppRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} classNames={"fade"} timeout={1000}>
        <Routes location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
