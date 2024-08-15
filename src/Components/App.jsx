import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Albums from "../Pages/Albums";
import Artists from "../Pages/Artists";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>My App</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Artists" element={<Artists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
