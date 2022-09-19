import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import Career from "./Career";
import About from "./About";

const routes = [
  { path: "/aboutme/", orderNo: 0, Component: <Home style={{ position: "absoulte" }} /> },
  { path: "/aboutme/About", orderNo: 0, Component: <About style={{ position: "absoulte" }} /> },
  { path: "/aboutme/Career", orderNo: 1, Component: <Career style={{ position: "absoulte" }} /> },
  { path: "/aboutme/Project", orderNo: 2, Component: <Project style={{ position: "absoulte" }} /> },
  { path: "/aboutme/Skill", orderNo: 3, Component: <Skill style={{ position: "absoulte" }} /> },
];

const AppRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} classNames={"fade"} timeout={500}>
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
