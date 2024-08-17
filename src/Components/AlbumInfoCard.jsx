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
