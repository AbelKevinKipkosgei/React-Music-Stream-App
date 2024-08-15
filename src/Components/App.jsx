import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Albums from "../Pages/Albums";
import AlbumInfo from "../Pages/AlbumInfo";
import Artists from "../Pages/Artists";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  // const artistInfo = [
  //   { empireId: "7EjxNoVjXo7gL73F2EdXVA", limit: 6, starIndex: 0 },
  //   { usherId: "7dGJo4pcD2V6oG8kP0tJRR", limit: 8, startIndex: 0 },
  //   {},
  // ];
  return (
    <Router>
      <div className="app-container">
        <h1>GrooveWave</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Albums/:id" element={<AlbumInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
