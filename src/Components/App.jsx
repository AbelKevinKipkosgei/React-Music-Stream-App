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
  const albumsInfo = [
    {
      id: "1JY8uoxY8dLSPwVj2UqLiP",
      name: "Empire: Original Soundtrack, Season 3",
      trackfiles: [
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Need Freedom (Official Video) ft. Jussie Smollett.mp3",
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast, Mariah Carey, Jussie Smollett - Infamous (Video).mp3",
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Aces High (Official Video) ft. Serayah.mp3",
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Over Everything (Audio) ft. Jussie Smollett, Yazz.mp3",
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Mama (Stripped Down Version) ft. Jussie Smollett (Official Video).mp3",
      ],
    },
    {
      id: "28L0OF7HJKdFUP5VZgdiz5",
      name: "Empire: The Complete Season 2",
      trackfiles: [
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Born To Love U (feat. Jussie Smollett) Official Audio.mp3",
        "/EmpireTheCompleteSeason2Tracks/Born to Lose (feat. Sean Cross, Swizz Beatz, Jussie Smollett, and Yazz) Audio.mp3",
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Hourglass (feat. V. Bozeman) Audio.mp3",
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Get No Better (2.0) (feat. Serayah) (Audio).mp3",
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Snitch Bitch ft. Terrence Howard and Petey Pablo (Official Audio).mp3",
      ],
    },
    {
      id: "5F63FnyDVZcFljjvVRdPd8",
      name: "Empire: Original Soundtrack, Season 2 Volume 2 (Deluxe)",
      trackfiles: [
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Freedom (Audio) ft. Jussie Smollett.mp3",
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Crown (Audio) ft. Jamila Velazquez, Raquel Castro, Yani Marin.mp3",
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Look But Dont Touch (Audio) ft. Serayah.mp3",
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Good People (Audio) ft. Jussie Smollett, Yazz.mp3",
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Like My Daddy (Official Audio) ft. Jussie Smollett.mp3",
      ],
    },
  ];
  return (
    <Router>
      <div className="app-container">
        <h1>GrooveWave</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Albums" element={<Albums albumsInfo={albumsInfo} />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Albums/:id" element={<AlbumInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
