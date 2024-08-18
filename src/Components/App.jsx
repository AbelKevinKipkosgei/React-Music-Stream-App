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
    {
      id: "3v2uuSLEPbCXLtZxVrGKcd",
      name: "Empire: The Complete Season 1",
      trackfiles: [
        "/Empire: TheCompleteSeason1/V Bozeman - What Is Love.mp3",
        "/Empire: TheCompleteSeason1/Jamal Hakeem of Empire - Live In the Moment feat Jussie Smollett Yazz.mp3",
        "/Empire: TheCompleteSeason1/Empire Cast - Good Enough.mp3",
        "/Empire: TheCompleteSeason1/Right There.mp3",
        "/Empire: TheCompleteSeason1/Armani.mp3",
      ],
    },
    {
      id: "65nrMZ7EnJgYKeasDhRXTy",
      name: "Original Soundtrack from Season 1 of Empire (Deluxe)",
      trackfiles: [
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Empire Cast - Good Enough.mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/V Bozeman - What Is Love.mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Empire Cast - No Apologies (feat. Jussie Smollett, Yazz) (Lyric).mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Empire Cast - Keep It Movin (feat. Serayah McNeill and Yazz) Audio.mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Keep Your Money.mp3",
      ],
    },
    {
      id: "2lP9LOrnaIlTkfO9iu91rl",
      name: "Original Soundtrack from Season 1 of Empire",
      trackfiles: [
        "/OriginalSoundtrackfromSeason1ofEmpire/Empire Cast - Good Enough.mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire/V Bozeman - What Is Love.mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire/Empire Cast - No Apologies (feat. Jussie Smollett, Yazz) (Lyric).mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire/Empire Cast - Keep It Movin (feat. Serayah McNeill and Yazz) Audio.mp3",
        "/OriginalSoundtrackfromSeason1ofEmpire/Walk Out On Me.mp3",
      ],
    },
    {
      id: "3kjHLu1pL7tdY88GFwEkl6",
      name: "The Death of Slim Shady (Coup De Grâce)",
      trackfiles: [
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Renaissance Official Audio.mp3",
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Habits (feat. White Gold) Official Audio.mp3",
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Trouble Official Audio.mp3",
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Brand New Dance Official Audio.mp3",
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Evil Official Audio.mp3",
      ],
    },
    {
      id: "5EUgcfO5OWxnniHR3QYFcK",
      name: "The Marshall Mathers LP2 (Expanded Edition)",
      trackfiles: [
        "/TheMarshallMathersLP2(Expanded Edition)/Bad Guy.mp3",
        "/TheMarshallMathersLP2(Expanded Edition)/Parking Lot (Skit).mp3",
        "/TheMarshallMathersLP2(Expanded Edition)/Rhyme Or Reason.mp3",
        "/TheMarshallMathersLP2(Expanded Edition)/So Much Better.mp3",
        "/TheMarshallMathersLP2(Expanded Edition)/Survival.mp3",
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
