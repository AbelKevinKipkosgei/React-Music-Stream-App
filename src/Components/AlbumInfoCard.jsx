import PropTypes from "prop-types";
import TrackList from "./TrackList";
import "./AlbumInfoCard.css"; // Import the CSS file for styling

function AlbumInfoCard({ albumInfo }) {
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
