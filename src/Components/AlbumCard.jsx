import PropTypes from "prop-types";
import "./AlbumCard.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AlbumCard({
  albumId,
  albumImage,
  albumName,
  albumArtistName,
  albumsInfo,
}) {
  AlbumCard.propTypes = {
    albumId: PropTypes.string.isRequired,
    albumImage: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumArtistName: PropTypes.string.isRequired,
    albumsInfo: PropTypes.array.isRequired,
  };

  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio());

  //Find the album based on the albumId
  const album = albumsInfo.find((album) => album.id === albumId);

  useEffect(() => {
    if (isPlaying && album) {
      const audio = audioRef.current;
      audio.src = album.trackfiles[currentTrackIndex];
      audio.play();

      audio.onended = () => {
        const nextTrackIndex =
          (currentTrackIndex + 1) % album.trackfiles.length;
        setCurrentTrackIndex(nextTrackIndex);
      };
      return () => {
        audio.pause();
        audio.src = "";
      };
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, album]);

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
