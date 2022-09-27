import AppRouter from "./Router";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { init } from "emailjs-com";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
};

export default App;
