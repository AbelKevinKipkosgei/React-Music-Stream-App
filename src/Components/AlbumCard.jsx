import PropTypes from "prop-types";
import "./AlbumCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AlbumCard({ albumId, albumImage, albumName, albumArtistName }) {
  AlbumCard.propTypes = {
    albumId: PropTypes.string.isRequired,
    albumImage: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumArtistName: PropTypes.string.isRequired,
  };

  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = (e) => {
    e.stopPropagation(); // Prevent triggering the navigation on card click
    setIsPlaying(!isPlaying);
    // Handle play/pause functionality here
  };

  const handleClick = () => {
    navigate(`/Albums/${albumId}`);
  };
  return (
    <div className="album-card" onClick={handleClick}>
      <img src={albumImage} alt={albumName} className="album-cover" />
      <div className="play-pause-button" onClick={handlePlayPauseClick}>
        <button>
          <img
            src={isPlaying ? "../../pause-button.png" : "../../play-button.png"}
            alt={isPlaying ? "Pause" : "Play"}
            width="30px"
          />
        </button>
      </div>
      <div className="album-info">
        <p className="album-title">{albumName}</p>
        <p className="artist-name">{albumArtistName}</p>
      </div>
    </div>
  );
}
export default AlbumCard;
