import PropTypes from "prop-types";
import "./Track.css"; // Import the CSS file for styling

function Track({ trackName, trackNumber, isPlaying, onPlayPauseClick }) {
  return (
    <div className={`trackname ${isPlaying ? "playing" : ""}`}>
      <p className="trackname-layout">
        {trackNumber}. {trackName}
        <button onClick={onPlayPauseClick} className="play-button">
          <img
            src={isPlaying ? "/pause-button.png" : "/play-button.png"}
            alt={isPlaying ? "Pause button" : "Play button"}
            width="25px"
          />
        </button>
      </p>
    </div>
  );
}

Track.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackNumber: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired, // Indicates whether this track is currently playing
  onPlayPauseClick: PropTypes.func.isRequired, // Callback for when the play/pause button is clicked
};

export default Track;
