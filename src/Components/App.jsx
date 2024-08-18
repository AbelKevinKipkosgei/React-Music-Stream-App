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
    {
      id: "3aTuW4BtsyyyyQa9LKqj8n",
      name: "Curtain Call 2",
      trackfiles: [
        "/CurtainCall2/Eminem - Godzilla ft. Juice WRLD (Official Music Video).mp3",
        "/CurtainCall2/Eminem - Lucky You (Official Music Video) ft. Joyner Lucas.mp3",
        "/CurtainCall2/Bad Meets Evil - Lighters ft. Bruno Mars.mp3",
        "/CurtainCall2/Eminem - GNAT (Official Music Video).mp3",
        "/CurtainCall2/Cinderella Man.mp3",
      ],
    },
    {
      id: "6EzbFdrwvWpnpUjzrR57aU",
      name: "The Eminem Show (Expanded Edition)",
      trackfiles: [
        "/TheEminemShow(ExpandedEdition)/Curtains Up (Skit).mp3",
        "/TheEminemShow(ExpandedEdition)/White America.mp3",
        "/TheEminemShow(ExpandedEdition)/Business.mp3",
        "/TheEminemShow(ExpandedEdition)/Eminem - Cleanin Out My Closet (Official Music Video).mp3",
        "/TheEminemShow(ExpandedEdition)/Square Dance.mp3",
      ],
    },
    {
      id: "3MKvhQoFSrR2PrxXXBHe9B",
      name: "Music To Be Murdered By - Side B (Deluxe Edition)",
      trackfiles: [
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Alfred (Intro).mp3",
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Black Magic (feat. Skylar Grey) Official Audio.mp3",
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Alfreds Theme Official Audio.mp3",
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Tone Deaf Official Audio.mp3",
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Book of Rhymes (feat. DJ Premier) Official Audio.mp3",
      ],
    },
    {
      id: "0U6ldwLBEMkwgfQRY4V6D2",
      name: "Revival",
      trackfiles: [
        "/Revival/Eminem - Walk On Water (Audio) ft. Beyoncé.mp3",
        "/Revival/Believe.mp3",
        "/Revival/Chloraseptic.mp3",
        "/Revival/Eminem - Untouchable (Audio).mp3",
        "/Revival/Eminem - River (Audio) ft. Ed Sheeran.mp3",
      ],
    },
    {
      id: "4otkd9As6YaxxEkIjXPiZ6",
      name: "Music To Be Murdered By",
      trackfiles: [
        "/MusicToBeMurderedBy/Premonition - Intro Official Audio.mp3",
        "/MusicToBeMurderedBy/Unaccommodating (feat. Young M.A) Official Audio.mp3",
        "/MusicToBeMurderedBy/You Gon Learn (feat. Royce Da 59 White Gold) Official Audio.mp3",
        "/MusicToBeMurderedBy/Alfred (Interlude).mp3",
        "/MusicToBeMurderedBy/Those Kinda Nights (feat. Ed Sheeran) Official Audio.mp3",
      ],
    },
    {
      id: "3HNnxK7NgLXbDoxRZxNWiR",
      name: "Kamikaze",
      trackfiles: [
        "/Kamikaze/The Ringer.mp3",
        "/Kamikaze/Greatest.mp3",
        "/Kamikaze/Lucky You (Feat. Joyner Lucas) Official Audio.mp3",
        "/Kamikaze/Paul (Skit).mp3",
        "/Kamikaze/Normal.mp3",
      ],
    },
    {
      id: "7GZwgBHhaazZ2QnrvbpDPO",
      name: "COMING HOME (Expanded Edition)",
      trackfiles: [
        "/COMINGHOME(ExpandedEdition)/USHER, Burna Boy - Coming Home (Visualizer).mp3",
        "/COMINGHOME(ExpandedEdition)/USHER, Summer Walker, 21 Savage - Good Good (Official Music Video).mp3",
        "/COMINGHOME(ExpandedEdition)/USHER - A-Town Girl (Visualizer) ft. Latto.mp3",
        "/COMINGHOME(ExpandedEdition)/USHER, The-Dream - Cold Blooded (Visualizer).mp3",
        "/COMINGHOME(ExpandedEdition)/USHER - Kissing Strangers (Visualizer).mp3",
      ],
    },
    {
      id: "7Ic1aiLXMmyyi0cVkk04aS",
      name: "COMING HOME",
      trackfiles: [
        "/COMINGHOME/USHER, Burna Boy - Coming Home (Visualizer).mp3",
        "/COMINGHOME/USHER, Summer Walker, 21 Savage - Good Good (Official Music Video).mp3",
        "/COMINGHOME/USHER - A-Town Girl (Visualizer) ft. Latto.mp3",
        "/COMINGHOME/USHER, The-Dream - Cold Blooded (Visualizer).mp3",
        "/COMINGHOME/USHER - Kissing Strangers (Visualizer).mp3",
      ],
    },
    {
      id: "3ideAfrVvWpeZkKB9fOz81",
      name: "My Way (25th Anniversary Edition)",
      trackfiles: [
        "/MyWay(25thAnniversaryEdition)/Usher - You make me wanna.mp3",
        "/MyWay(25thAnniversaryEdition)/Just Like Me.mp3",
        "/MyWay(25thAnniversaryEdition)/Usher - Nice Slow (Pitched Radio Edit).mp3",
        "/MyWay(25thAnniversaryEdition)/Slow Jam.mp3",
        "/MyWay(25thAnniversaryEdition)/My Way.mp3",
      ],
    },
    {
      id: "7JZi4kTfYCJcqOzVbKAYh5",
      name: "A",
      trackfiles: [
        "/A/Usher x Zaytoven - Stay At Home (Audio) ft. Future.mp3",
        "/A/Usher x Zaytoven - ATA (Audio).mp3",
        "/A/Usher x Zaytoven - Peace Sign (Audio).mp3",
        "/A/Usher x Zaytoven - You Decide (Audio).mp3",
        "/A/Usher x Zaytoven - Birthday (Audio).mp3",
      ],
    },
    {
      id: "4HAuPn3A4uu9n7RYNk1dOz",
      name: "Hard II Love",
      trackfiles: [
        "/HardIILove/Need U.mp3",
        "/HardIILove/Usher - Missin U (Audio).mp3",
        "/HardIILove/Usher - No Limit (Audio) ft. Young Thug.mp3",
        "/HardIILove/Bump.mp3",
        "/HardIILove/Let Me.mp3",
      ],
    },
    {
      id: "7eyuQZCLG5tdjWpKZbDE8g",
      name: "Looking 4 Myself (Expanded Edition)",
      trackfiles: [
        "/Looking4Myself(ExpandedEdition)/Cant Stop Wont Stop.mp3",
        "/Looking4Myself(ExpandedEdition)/Usher - Scream (Official Audio).mp3",
        "/Looking4Myself(ExpandedEdition)/Climax.mp3",
        "/Looking4Myself(ExpandedEdition)/I Care For U.mp3",
        "/Looking4Myself(ExpandedEdition)/Show Me.mp3",
      ],
    },
    {
      id: "6bnDvfVdO3LarvcpWEzmeD",
      name: "Versus",
      trackfiles: [
        "/Versus/Usher - Love em all.mp3",
        "/Versus/Dj Got Us Fallin In Love (HQ).mp3",
        "/Versus/Usher - Hot Tottie (Feat. Jay-Z).mp3",
        "/Versus/Usher - Lay you down.mp3",
        "/Versus/Usher - Lingerie.mp3",
      ],
    },
    {
      id: "6A1F3Fkq5dYeYYNkXflcTX",
      name: "Raymond v Raymond (Expanded Edition)",
      trackfiles: [
        "/RaymondvRaymond(ExpandedEdition)/Monstar.mp3",
        "/RaymondvRaymond(ExpandedEdition)/Hey Daddy (Daddys Home) - Usher (2010).mp3",
        "/RaymondvRaymond(ExpandedEdition)/There Goes My Baby - Usher.mp3",
        "/RaymondvRaymond(ExpandedEdition)/Usher - Lil Freak (feat. Nicki Minaj) Explicit Version.mp3",
        "/RaymondvRaymond(ExpandedEdition)/She Dont Know.mp3",
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
