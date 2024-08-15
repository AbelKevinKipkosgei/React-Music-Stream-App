import PropTypes from "prop-types"
import "./AlbumCard.css"
import { useNavigate } from "react-router-dom";

function AlbumCard({ albumId, albumImage, albumName, albumArtistName }) {
  AlbumCard.propTypes = {
    albumId: PropTypes.string.isRequired,
    albumImage: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumArtistName: PropTypes.string.isRequired
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Albums/${albumId}`);
  }
  return (
    <div className="album-card" onClick={handleClick}>
      <img src={albumImage} alt={albumName} className="album-cover" />
      <div className="album-info">
        <p className="album-title">{albumName}</p>
        <p className="artist-name">{albumArtistName}</p>
      </div>
    </div>
  );
}
export default AlbumCard;
