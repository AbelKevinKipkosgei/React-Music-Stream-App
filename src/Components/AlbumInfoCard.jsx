import PropTypes from "prop-types";
import TrackList from "./TrackList";

function AlbumInfoCard({ albumInfo }) {
  return (
    <div className="one-album-data">
      <img src={albumInfo.images[1].url} alt={albumInfo.name} />
      <div className="album-description">
        <h2>{albumInfo.name}</h2>
        <p>{albumInfo.artists[0].name}</p>
      </div>
      <div className="track-lists">
        <TrackList albumTracks={albumInfo.tracks.items} />
      </div>
    </div>
  );
}

AlbumInfoCard.propTypes = {
  albumInfo: PropTypes.object.isRequired,
};

export default AlbumInfoCard;
