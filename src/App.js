import AppRouter from "./Router";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
};

export default App;
