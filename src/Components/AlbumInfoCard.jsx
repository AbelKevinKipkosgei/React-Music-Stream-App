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
