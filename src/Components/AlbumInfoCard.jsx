import PropTypes from "prop-types";
import TrackList from "./TrackList";
import "./AlbumInfoCard.css"; // Import the CSS file for styling

function AlbumInfoCard({ albumInfo }) {
  const tracksInfo = [
    {
      albumId: "1JY8uoxY8dLSPwVj2UqLiP",
      trackId: "2PolQEP1nmBWUWM9bE4LYR",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Need Freedom (Official Video) ft. Jussie Smollett.mp3",
    },
    {
      albumId: "1JY8uoxY8dLSPwVj2UqLiP",
      trackId: "0whvlq5itiG6JNCtPoPG82",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast, Mariah Carey, Jussie Smollett - Infamous (Video).mp3",
    },
    {
      albumId: "1JY8uoxY8dLSPwVj2UqLiP",
      trackId: "06gkJcXenvimOD3Bme9nFA",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Aces High (Official Video) ft. Serayah.mp3",
    },
    {
      albumId: "1JY8uoxY8dLSPwVj2UqLiP",
      trackId: "0LpRWY4sAluQKGUNZvDWM2",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Over Everything (Audio) ft. Jussie Smollett, Yazz.mp3",
    },
    {
      albumId: "1JY8uoxY8dLSPwVj2UqLiP",
      trackId: "3Xrms5VrC4TaDFskr7BMTd",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason3Tracks/Empire Cast - Mama (Stripped Down Version) ft. Jussie Smollett (Official Video).mp3",
    },
    {
      albumId: "28L0OF7HJKdFUP5VZgdiz5",
      trackId: "66M603Q0gXv8qaM3IFiPrA",
      trackSrc:
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Born To Love U (feat. Jussie Smollett) Official Audio.mp3",
    },
    {
      albumId: "28L0OF7HJKdFUP5VZgdiz5",
      trackId: "2Io2K6df5l9okpBuFWd9Vv",
      trackSrc:
        "/public/EmpireTheCompleteSeason2Tracks/Born to Lose (feat. Sean Cross, Swizz Beatz, Jussie Smollett, and Yazz) Audio.mp3",
    },
    {
      albumId: "28L0OF7HJKdFUP5VZgdiz5",
      trackId: "1L8f7tIobpFjs1m6vBXyAF",
      trackSrc:
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Hourglass (feat. V. Bozeman) Audio.mp3",
    },
    {
      albumId: "28L0OF7HJKdFUP5VZgdiz5",
      trackId: "4Q2pE83LzAsxzdPFQhtEvI",
      trackSrc:
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Get No Better (2.0) (feat. Serayah) (Audio).mp3",
    },
    {
      albumId: "28L0OF7HJKdFUP5VZgdiz5",
      trackId: "6HPFrapXVNAofWKdIuxvKF",
      trackSrc:
        "/EmpireTheCompleteSeason2Tracks/Empire Cast - Snitch Bitch ft. Terrence Howard and Petey Pablo (Official Audio).mp3",
    },
    {
      albumId: "5F63FnyDVZcFljjvVRdPd8",
      trackId: "3K21eqPSN8Fb4SxEnKfEOo",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Freedom (Audio) ft. Jussie Smollett.mp3",
    },
    {
      albumId: "5F63FnyDVZcFljjvVRdPd8",
      trackId: "75nhw5YxdMeEE9cj9AjyHR",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Crown (Audio) ft. Jamila Velazquez, Raquel Castro, Yani Marin.mp3",
    },
    {
      albumId: "5F63FnyDVZcFljjvVRdPd8",
      trackId: "4GgNPT0DpAAxlLKQ5yGI71",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Look But Dont Touch (Audio) ft. Serayah.mp3",
    },
    {
      albumId: "5F63FnyDVZcFljjvVRdPd8",
      trackId: "6zuizmUpT8hlgdK3wzFdsl",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Good People (Audio) ft. Jussie Smollett, Yazz.mp3",
    },
    {
      albumId: "5F63FnyDVZcFljjvVRdPd8",
      trackId: "4kLStCq9NefHSGXsyXu0Bk",
      trackSrc:
        "/EmpireOriginalSoundtrackSeason2Volume2(Deluxe)/Empire Cast - Like My Daddy (Official Audio) ft. Jussie Smollett.mp3",
    },
    {
      albumId: "3v2uuSLEPbCXLtZxVrGKcd",
      trackId: "76z60uetkXxd6K3luTiO4K",
      trackSrc: "/Empire: TheCompleteSeason1/V Bozeman - What Is Love.mp3",
    },
    {
      albumId: "3v2uuSLEPbCXLtZxVrGKcd",
      trackId: "1dYdSMAEwQwijL7hRpZme2",
      trackSrc:
        "/Empire: TheCompleteSeason1/Jamal Hakeem of Empire - Live In the Moment feat Jussie Smollett Yazz.mp3",
    },
    {
      albumId: "3v2uuSLEPbCXLtZxVrGKcd",
      trackId: "1ifUqKSDlpRXgFuuFVqdmP",
      trackSrc: "/Empire: TheCompleteSeason1/Empire Cast - Good Enough.mp3",
    },
    {
      albumId: "3v2uuSLEPbCXLtZxVrGKcd",
      trackId: "4YUBufbyqgCS2xwOzlMDdb",
      trackSrc: "/Empire: TheCompleteSeason1/Right There.mp3",
    },
    {
      albumId: "3v2uuSLEPbCXLtZxVrGKcd",
      trackId: "2eZ13b4AChKz2eYytbsqd6",
      trackSrc: "/Empire: TheCompleteSeason1/Armani.mp3",
    },
    {
      albumId: "65nrMZ7EnJgYKeasDhRXTy",
      trackId: "0iqY4f4lNp2Bh1rthklY1q",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Empire Cast - Good Enough.mp3",
    },
    {
      albumId: "65nrMZ7EnJgYKeasDhRXTy",
      trackId: "2DOykLfhy5XEHxZeb3AaPA",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/V Bozeman - What Is Love.mp3",
    },
    {
      albumId: "65nrMZ7EnJgYKeasDhRXTy",
      trackId: "1TVvzxDIqb8UxzDG6V8FLB",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Empire Cast - No Apologies (feat. Jussie Smollett, Yazz) (Lyric).mp3",
    },
    {
      albumId: "65nrMZ7EnJgYKeasDhRXTy",
      trackId: "3gNVgxCFETeK0PtOSxkk9W",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Empire Cast - Keep It Movin (feat. Serayah McNeill and Yazz) Audio.mp3",
    },
    {
      albumId: "65nrMZ7EnJgYKeasDhRXTy",
      trackId: "5GTTck4sucr4ymUJPFxHGo",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire(Deluxe)/Keep Your Money.mp3",
    },
    {
      albumId: "2lP9LOrnaIlTkfO9iu91rl",
      trackId: "5kfIE9HCoFfIpXUfDRL6JJ",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire/Empire Cast - Good Enough.mp3",
    },
    {
      albumId: "2lP9LOrnaIlTkfO9iu91rl",
      trackId: "03OmTPZJGqAWVWw5qarlja",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire/V Bozeman - What Is Love.mp3",
    },
    {
      albumId: "2lP9LOrnaIlTkfO9iu91rl",
      trackId: "7Bc6X1NBuwQdrcOqCtYnzz",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire/Empire Cast - No Apologies (feat. Jussie Smollett, Yazz) (Lyric).mp3",
    },
    {
      albumId: "2lP9LOrnaIlTkfO9iu91rl",
      trackId: "0e0oS444SW4J6CofvOjPGS",
      trackSrc:
        "/OriginalSoundtrackfromSeason1ofEmpire/Empire Cast - Keep It Movin (feat. Serayah McNeill and Yazz) Audio.mp3",
    },
    {
      albumId: "2lP9LOrnaIlTkfO9iu91rl",
      trackId: "3hu3c634rzOxC7D33oCWoz",
      trackSrc: "/OriginalSoundtrackfromSeason1ofEmpire/Walk Out On Me.mp3",
    },
    {
      albumId: "3kjHLu1pL7tdY88GFwEkl6",
      trackId: "55u5QIlEuzCipJBtZPdJio",
      trackSrc:
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Renaissance Official Audio.mp3",
    },
    {
      albumId: "3kjHLu1pL7tdY88GFwEkl6",
      trackId: "7I3RalBqE7ZE0RSxgGlGlm",
      trackSrc:
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Habits (feat. White Gold) Official Audio.mp3",
    },
    {
      albumId: "3kjHLu1pL7tdY88GFwEkl6",
      trackId: "59151GHN7yr5g9B3bqlGdR",
      trackSrc:
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Trouble Official Audio.mp3",
    },
    {
      albumId: "3kjHLu1pL7tdY88GFwEkl6",
      trackId: "77pfjsq0gSZwO8bYVTVROo",
      trackSrc:
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Brand New Dance Official Audio.mp3",
    },
    {
      albumId: "3kjHLu1pL7tdY88GFwEkl6",
      trackId: "21LCotDEwR7R8qOnqPVzi9",
      trackSrc:
        "/TheDeathofSlimShady(CoupDeGrâce)/Eminem - Evil Official Audio.mp3",
    },
    {
      albumId: "5EUgcfO5OWxnniHR3QYFcK",
      trackId: "4hsYSKz5gFMiO2q0V4L8m8",
      trackSrc: "/TheMarshallMathersLP2(Expanded Edition)/Bad Guy.mp3",
    },
    {
      albumId: "5EUgcfO5OWxnniHR3QYFcK",
      trackId: "7tldUICXp9StZFmayDxv1j",
      trackSrc:
        "/TheMarshallMathersLP2(Expanded Edition)/Parking Lot (Skit).mp3",
    },
    {
      albumId: "5EUgcfO5OWxnniHR3QYFcK",
      trackId: "1nB5rEmO17g1MlFEN8KQSd",
      trackSrc: "/TheMarshallMathersLP2(Expanded Edition)/Rhyme Or Reason.mp3",
    },
    {
      albumId: "5EUgcfO5OWxnniHR3QYFcK",
      trackId: "7ATSAXVEBlryu2EKOAo0Nh",
      trackSrc: "/TheMarshallMathersLP2(Expanded Edition)/So Much Better.mp3",
    },
    {
      albumId: "5EUgcfO5OWxnniHR3QYFcK",
      trackId: "5GEehBTspT5vfv3cGDoaDi",
      trackSrc: "/TheMarshallMathersLP2(Expanded Edition)/Survival.mp3",
    },
    {
      albumId: "3aTuW4BtsyyyyQa9LKqj8n",
      trackId: "1IiOIBsOQrQvcge0HiwF90",
      trackSrc:
        "/CurtainCall2/Eminem - Godzilla ft. Juice WRLD (Official Music Video).mp3",
    },
    {
      albumId: "3aTuW4BtsyyyyQa9LKqj8n",
      trackId: "3Rr8Mew8NQSdxKsjkAhIrD",
      trackSrc:
        "/CurtainCall2/Eminem - Lucky You (Official Music Video) ft. Joyner Lucas.mp3",
    },
    {
      albumId: "3aTuW4BtsyyyyQa9LKqj8n",
      trackId: "6h5hNqTZRLlcRcFWsK6XhW",
      trackSrc: "/CurtainCall2/Bad Meets Evil - Lighters ft. Bruno Mars.mp3",
    },
    {
      albumId: "3aTuW4BtsyyyyQa9LKqj8n",
      trackId: "5Dl3rpoBEgHKctcUt5SZGC",
      trackSrc: "/CurtainCall2/Eminem - GNAT (Official Music Video).mp3",
    },
    {
      albumId: "3aTuW4BtsyyyyQa9LKqj8n",
      trackId: "5eePARgaJdjj41WMgvctZE",
      trackSrc: "/CurtainCall2/Cinderella Man.mp3",
    },
    {
      albumId: "6EzbFdrwvWpnpUjzrR57aU",
      trackId: "16bZ4F7gikXyMYhlDJpGDd",
      trackSrc: "/TheEminemShow(ExpandedEdition)/Curtains Up (Skit).mp3",
    },
    {
      albumId: "6EzbFdrwvWpnpUjzrR57aU",
      trackId: "7HUQjZDqbet6uQW1p3EDGc",
      trackSrc: "/TheEminemShow(ExpandedEdition)/White America.mp3",
    },
    {
      albumId: "6EzbFdrwvWpnpUjzrR57aU",
      trackId: "6sWiC5rpM1o3rnjCgd0hEG",
      trackSrc: "/TheEminemShow(ExpandedEdition)/Business.mp3",
    },
    {
      albumId: "6EzbFdrwvWpnpUjzrR57aU",
      trackId: "6XK173kEu52iupeIqOnp41",
      trackSrc:
        "/TheEminemShow(ExpandedEdition)/Eminem - Cleanin Out My Closet (Official Music Video).mp3",
    },
    {
      albumId: "6EzbFdrwvWpnpUjzrR57aU",
      trackId: "10WTBqxaEVRDwbIaZB1jpr",
      trackSrc: "/TheEminemShow(ExpandedEdition)/Square Dance.mp3",
    },
    {
      albumId: "3MKvhQoFSrR2PrxXXBHe9B",
      trackId: "1sv41rYgHhPWdyzwk5K9zy",
      trackSrc: "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Alfred (Intro).mp3",
    },
    {
      albumId: "3MKvhQoFSrR2PrxXXBHe9B",
      trackId: "50le2HSqQAIqB4BGD4cE9e",
      trackSrc:
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Black Magic (feat. Skylar Grey) Official Audio.mp3",
    },
    {
      albumId: "3MKvhQoFSrR2PrxXXBHe9B",
      trackId: "0uAkm1iQLrzweZ4U1iXy6w",
      trackSrc:
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Alfreds Theme Official Audio.mp3",
    },
    {
      albumId: "3MKvhQoFSrR2PrxXXBHe9B",
      trackId: "1cEUi8QulMj1xgrPwwGC2p",
      trackSrc:
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Tone Deaf Official Audio.mp3",
    },
    {
      albumId: "3MKvhQoFSrR2PrxXXBHe9B",
      trackId: "08ir631EiCA7xIms7JDp15",
      trackSrc:
        "/MusicToBeMurderedBy-SideB(DeluxeEdition)/Book of Rhymes (feat. DJ Premier) Official Audio.mp3",
    },
    {
      albumId: "0U6ldwLBEMkwgfQRY4V6D2",
      trackId: "7CcoUAtUcYhUfBsmtn0ajO",
      trackSrc: "/Revival/Eminem - Walk On Water (Audio) ft. Beyoncé.mp3",
    },
    {
      albumId: "0U6ldwLBEMkwgfQRY4V6D2",
      trackId: "4iTyf5pLZMOR8YrEZgSopo",
      trackSrc: "/Revival/Believe.mp3",
    },
    {
      albumId: "0U6ldwLBEMkwgfQRY4V6D2",
      trackId: "13aKdwvdGjuZDv2OOKyvs7",
      trackSrc: "/Revival/Chloraseptic.mp3",
    },
    {
      albumId: "0U6ldwLBEMkwgfQRY4V6D2",
      trackId: "6IvespQWGW4USXwexlVKDm",
      trackSrc: "/public/Revival/Eminem - Untouchable (Audio).mp3",
    },
    {
      albumId: "0U6ldwLBEMkwgfQRY4V6D2",
      trackId: "1cS0TgbR263ey9jn0MwD2s",
      trackSrc: "/Revival/Eminem - River (Audio) ft. Ed Sheeran.mp3",
    },
    {
      albumId: "4otkd9As6YaxxEkIjXPiZ6",
      trackId: "7ccTcabbJlCJiIqtrSSwBk",
      trackSrc: "/MusicToBeMurderedBy/Premonition - Intro Official Audio.mp3",
    },
    {
      albumId: "4otkd9As6YaxxEkIjXPiZ6",
      trackId: "0q2vG0UVuy6ajjcpkQHdZM",
      trackSrc:
        "/MusicToBeMurderedBy/Unaccommodating (feat. Young M.A) Official Audio.mp3",
    },
    {
      albumId: "4otkd9As6YaxxEkIjXPiZ6",
      trackId: "0GQ5bFTVFFKpwNPc7KwQnB",
      trackSrc:
        "/MusicToBeMurderedBy/You Gon Learn (feat. Royce Da 59 White Gold) Official Audio.mp3",
    },
    {
      albumId: "4otkd9As6YaxxEkIjXPiZ6",
      trackId: "4EmunTy7kNBYQivOa8F6b8",
      trackSrc: "/MusicToBeMurderedBy/Alfred (Interlude).mp3",
    },
    {
      albumId: "4otkd9As6YaxxEkIjXPiZ6",
      trackId: "0VSzREd1OjEWJ9tXoFHRQH",
      trackSrc:
        "/MusicToBeMurderedBy/Those Kinda Nights (feat. Ed Sheeran) Official Audio.mp3",
    },
    {
      albumId: "3HNnxK7NgLXbDoxRZxNWiR",
      trackId: "2jt2WxXMCD4zjACthkJQVE",
      trackSrc: "/Kamikaze/The Ringer.mp3",
    },
    {
      albumId: "3HNnxK7NgLXbDoxRZxNWiR",
      trackId: "2XTquzYQAdT1Hk78bOUwsv",
      trackSrc: "/Kamikaze/Greatest.mp3",
    },
    {
      albumId: "3HNnxK7NgLXbDoxRZxNWiR",
      trackId: "60SdxE8apGAxMiRrpbmLY0",
      trackSrc: "/Kamikaze/Lucky You (Feat. Joyner Lucas) Official Audio.mp3",
    },
    {
      albumId: "3HNnxK7NgLXbDoxRZxNWiR",
      trackId: "0Uv5Kp8sEnriJjkX4oLfNI",
      trackSrc: "/Kamikaze/Paul (Skit).mp3",
    },
    {
      albumId: "3HNnxK7NgLXbDoxRZxNWiR",
      trackId: "0evt4UZbdhnHtcAnxkm6A1",
      trackSrc: "/Kamikaze/Normal.mp3",
    },
    {
      albumId: "7GZwgBHhaazZ2QnrvbpDPO",
      trackId: "22iJ0QhkHgDYBOCJG1qlQk",
      trackSrc:
        "/COMINGHOME(ExpandedEdition)/USHER, Burna Boy - Coming Home (Visualizer).mp3",
    },
    {
      albumId: "7GZwgBHhaazZ2QnrvbpDPO",
      trackId: "0WC0lsZqjrmecGTSF23688",
      trackSrc:
        "/COMINGHOME(ExpandedEdition)/USHER, Summer Walker, 21 Savage - Good Good (Official Music Video).mp3",
    },
    {
      albumId: "7GZwgBHhaazZ2QnrvbpDPO",
      trackId: "2qpYyda1trB5yhLUxGKhla",
      trackSrc:
        "/COMINGHOME(ExpandedEdition)/USHER - A-Town Girl (Visualizer) ft. Latto.mp3",
    },
    {
      albumId: "7GZwgBHhaazZ2QnrvbpDPO",
      trackId: "5lKmuhEhoiJbt43TKJ87F5",
      trackSrc:
        "/COMINGHOME(ExpandedEdition)/USHER, The-Dream - Cold Blooded (Visualizer).mp3",
    },
    {
      albumId: "7GZwgBHhaazZ2QnrvbpDPO",
      trackId: "3qEWYiHmoeUjjrfhPLltRk",
      trackSrc:
        "/COMINGHOME(ExpandedEdition)/USHER - Kissing Strangers (Visualizer).mp3",
    },
    {
      albumId: "7Ic1aiLXMmyyi0cVkk04aS",
      trackId: "2cJq3u0BRlsGFOYqP9KidJ",
      trackSrc: "/COMINGHOME/USHER, Burna Boy - Coming Home (Visualizer).mp3",
    },
    {
      albumId: "7Ic1aiLXMmyyi0cVkk04aS",
      trackId: "3jK1QRugwuAKAKOrtac7a2",
      trackSrc:
        "/COMINGHOME/USHER, Summer Walker, 21 Savage - Good Good (Official Music Video).mp3",
    },
    {
      albumId: "7Ic1aiLXMmyyi0cVkk04aS",
      trackId: "2FPn9y8gvvrp9gydZmGpvT",
      trackSrc: "/COMINGHOME/USHER - A-Town Girl (Visualizer) ft. Latto.mp3",
    },
    {
      albumId: "7Ic1aiLXMmyyi0cVkk04aS",
      trackId: "1XY0fx2ZCNPrWYC3GNavRp",
      trackSrc: "/COMINGHOME/USHER, The-Dream - Cold Blooded (Visualizer).mp3",
    },
    {
      albumId: "7Ic1aiLXMmyyi0cVkk04aS",
      trackId: "5brMixqQiQN4D60xmvrSts",
      trackSrc: "/COMINGHOME/USHER - Kissing Strangers (Visualizer).mp3",
    },
    {
      albumId: "3ideAfrVvWpeZkKB9fOz81",
      trackId: "5AQcMYiXysWVDKAUOPWF4D",
      trackSrc: "/MyWay(25thAnniversaryEdition)/Usher - You make me wanna.mp3",
    },
    {
      albumId: "3ideAfrVvWpeZkKB9fOz81",
      trackId: "36RBI9bXwndRyb5qBXa0Xg",
      trackSrc: "/MyWay(25thAnniversaryEdition)/Just Like Me.mp3",
    },
    {
      albumId: "3ideAfrVvWpeZkKB9fOz81",
      trackId: "0m1iE0A6zITYrzsWzEmpSR",
      trackSrc:
        "/MyWay(25thAnniversaryEdition)/Usher - Nice Slow (Pitched Radio Edit).mp3",
    },
    {
      albumId: "3ideAfrVvWpeZkKB9fOz81",
      trackId: "5XT3akg9m184DEvgo2zNGX",
      trackSrc: "/MyWay(25thAnniversaryEdition)/Slow Jam.mp3",
    },
    {
      albumId: "3ideAfrVvWpeZkKB9fOz81",
      trackId: "79SRuRTczEOhGLJeVbk20X",
      trackSrc: "/MyWay(25thAnniversaryEdition)/My Way.mp3",
    },
    {
      albumId: "7JZi4kTfYCJcqOzVbKAYh5",
      trackId: "2BwmbZnTS8RCH8upxgwmsy",
      trackSrc: "/A/Usher x Zaytoven - Stay At Home (Audio) ft. Future.mp3",
    },
    {
      albumId: "7JZi4kTfYCJcqOzVbKAYh5",
      trackId: "5qfnQ0gOh7bL41HmMT2hJD",
      trackSrc: "/A/Usher x Zaytoven - ATA (Audio).mp3",
    },
    {
      albumId: "7JZi4kTfYCJcqOzVbKAYh5",
      trackId: "3DlGY66fukwF71OYNLylxc",
      trackSrc: "/A/Usher x Zaytoven - Peace Sign (Audio).mp3",
    },
    {
      albumId: "7JZi4kTfYCJcqOzVbKAYh5",
      trackId: "43O1LuFW6QIJ20RSV8gC4g",
      trackSrc: "/A/Usher x Zaytoven - You Decide (Audio).mp3",
    },
    {
      albumId: "7JZi4kTfYCJcqOzVbKAYh5",
      trackId: "3eKNhLFP3smSZTsyXFZchJ",
      trackSrc: "/A/Usher x Zaytoven - Birthday (Audio).mp3",
    },
    {
      albumId: "4HAuPn3A4uu9n7RYNk1dOz",
      trackId: "2xXWUv1kpqGwckDDyKJEZC",
      trackSrc: "/HardIILove/Need U.mp3",
    },
    {
      albumId: "4HAuPn3A4uu9n7RYNk1dOz",
      trackId: "36YfkagRBn8XI6pKOjbTuV",
      trackSrc: "/HardIILove/Usher - Missin U (Audio).mp3",
    },
    {
      albumId: "4HAuPn3A4uu9n7RYNk1dOz",
      trackId: "1CDBn2Lm7E63XKQDsdCq6O",
      trackSrc: "/HardIILove/Usher - No Limit (Audio) ft. Young Thug.mp3",
    },
    {
      albumId: "4HAuPn3A4uu9n7RYNk1dOz",
      trackId: "5j2qgdGCcIyrZ906oZlXcA",
      trackSrc: "/HardIILove/Bump.mp3",
    },
    {
      albumId: "4HAuPn3A4uu9n7RYNk1dOz",
      trackId: "2zGbEkMYPxlQJQ9VKD5crD",
      trackSrc: "/HardIILove/Let Me.mp3",
    },
    {
      albumId: "7eyuQZCLG5tdjWpKZbDE8g",
      trackId: "3SuYBr6fF1dxNdnPEG6Nrq",
      trackSrc: "/Looking4Myself(ExpandedEdition)/Cant Stop Wont Stop.mp3",
    },
    {
      albumId: "7eyuQZCLG5tdjWpKZbDE8g",
      trackId: "12eMQUn2GzfsfsQLH53M19",
      trackSrc:
        "/Looking4Myself(ExpandedEdition)/Usher - Scream (Official Audio).mp3",
    },
    {
      albumId: "7eyuQZCLG5tdjWpKZbDE8g",
      trackId: "5pyVqlqThcxI7tPDjHIzPh",
      trackSrc: "/Looking4Myself(ExpandedEdition)/Climax.mp3",
    },
    {
      albumId: "7eyuQZCLG5tdjWpKZbDE8g",
      trackId: "49HpSwfC9vUtqXXiVyJytQ",
      trackSrc: "/Looking4Myself(ExpandedEdition)/I Care For U.mp3",
    },
    {
      albumId: "7eyuQZCLG5tdjWpKZbDE8g",
      trackId: "6nOXmmEaUNS2M3FGyqOGbI",
      trackSrc: "/Looking4Myself(ExpandedEdition)/Show Me.mp3",
    },
    {
      albumId: "6bnDvfVdO3LarvcpWEzmeD",
      trackId: "1zXOibHOM0vtM9TbAqn1w2",
      trackSrc: "/Versus/Usher - Love em all.mp3",
    },
    {
      albumId: "6bnDvfVdO3LarvcpWEzmeD",
      trackId: "28AUzRo0nQLESL55WDV0um",
      trackSrc: "/Versus/Dj Got Us Fallin In Love (HQ).mp3",
    },
    {
      albumId: "6bnDvfVdO3LarvcpWEzmeD",
      trackId: "0yZGL0kUrh5TFM52bBhjBd",
      trackSrc: "/Versus/Usher - Hot Tottie (Feat. Jay-Z).mp3",
    },
    {
      albumId: "6bnDvfVdO3LarvcpWEzmeD",
      trackId: "5MnMWAZreJjGjEkAZlbrE9",
      trackSrc: "/Versus/Usher - Lay you down.mp3",
    },
    {
      albumId: "6bnDvfVdO3LarvcpWEzmeD",
      trackId: "7oRGN7v2bRenO5QqnlflyV",
      trackSrc: "/Versus/Usher - Lingerie.mp3",
    },
    {
      albumId: "6A1F3Fkq5dYeYYNkXflcTX",
      trackId: "3IfytpNFSJwGXrSJOVhKLV",
      trackSrc: "/RaymondvRaymond(ExpandedEdition)/Monstar.mp3",
    },
    {
      albumId: "6A1F3Fkq5dYeYYNkXflcTX",
      trackId: "030OCtLMrljNhp8OWHBWW3",
      trackSrc:
        "/RaymondvRaymond(ExpandedEdition)/Hey Daddy (Daddys Home) - Usher (2010).mp3",
    },
    {
      albumId: "6A1F3Fkq5dYeYYNkXflcTX",
      trackId: "6IUiqtI8tE49sqGbmtrNd8",
      trackSrc:
        "/RaymondvRaymond(ExpandedEdition)/There Goes My Baby - Usher.mp3",
    },
    {
      albumId: "6A1F3Fkq5dYeYYNkXflcTX",
      trackId: "2sdarYql1R0GAdFsdb4LDM",
      trackSrc:
        "/RaymondvRaymond(ExpandedEdition)/Usher - Lil Freak (feat. Nicki Minaj) Explicit Version.mp3",
    },
    {
      albumId: "6A1F3Fkq5dYeYYNkXflcTX",
      trackId: "34PFCxQHHROuFl2OsDCvxH",
      trackSrc: "/RaymondvRaymond(ExpandedEdition)/She Dont Know.mp3",
    },
  ];
  return (
    <div className="one-album-data">
      <div className="album-info-card">
        <img
          src={albumInfo.images[1].url}
          alt={albumInfo.name}
          className="album-image"
        />
        <div className="album-description">
          <h2>{albumInfo.name}</h2>
          <p>{albumInfo.artists[0].name}</p>
        </div>
      </div>
      <div className="track-lists">
        <TrackList
          tracksInfo={tracksInfo}
          currentAlbumId={albumInfo.id}
          albumTracks={albumInfo.tracks.items}
          albumName={albumInfo.name}
          artistName={albumInfo.artists[0].name}
          albumImage={albumInfo.images[1].url}
        />
      </div>
    </div>
  );
}

AlbumInfoCard.propTypes = {
  albumInfo: PropTypes.object.isRequired,
};

export default AlbumInfoCard;
