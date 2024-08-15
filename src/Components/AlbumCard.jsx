import PropTypes from "prop-types"
import "./AlbumCard.css"

function AlbumCard({ albumImage, albumName, albumArtistName }) {
  AlbumCard.propTypes = {
    albumImage: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumArtistName: PropTypes.string.isRequired
  };
  return (
    <div className="album-card">
      <img src={albumImage} alt={albumName} className="album-cover" />
      <div className="album-info">
        <p className="album-title">{albumName}</p>
        <p className="artist-name">{albumArtistName}</p>
      </div>
    </div>
  );
}
export default AlbumCard;
