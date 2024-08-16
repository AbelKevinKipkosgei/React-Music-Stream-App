import PropTypes from "prop-types";
import "./AlbumCard.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AlbumCard({
  albumId,
  albumImage,
  albumName,
  albumArtistName,
  albumsInfo,
  isPlaying,
  onPlayPause,
  currentTrackIndex,
}) {
  AlbumCard.propTypes = {
    albumId: PropTypes.string.isRequired,
    albumImage: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumArtistName: PropTypes.string.isRequired,
    albumsInfo: PropTypes.array.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    currentTrackIndex: PropTypes.number.isRequired,
  };

  const navigate = useNavigate();
  const album = albumsInfo.find((album) => album.id === albumId);

  useEffect(() => {
    if (isPlaying && album) {
      // Update the track to play
      const audio = new Audio(album.trackfiles[currentTrackIndex]);
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });

      return () => {
        audio.pause();
        audio.src = "";
      };
    }
  }, [isPlaying, currentTrackIndex, album]);

  const handleClick = () => {
    navigate(`/Albums/${albumId}`);
  };

  return (
    <div className="album-card" onClick={handleClick}>
      <img src={albumImage} alt={albumName} className="album-cover" />
      <div
        className="play-pause-button"
        onClick={(e) => {
          e.stopPropagation();
          onPlayPause();
        }}
      >
        <button>
          <img
            src={isPlaying ? "/pause-button.png" : "/play-button.png"}
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
