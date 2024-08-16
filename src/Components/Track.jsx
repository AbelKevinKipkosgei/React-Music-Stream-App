import { useState } from "react";
import PropTypes from "prop-types";
import "./Track.css"; // Import the CSS file for styling

function Track({ trackName, trackNumber }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="trackname">
      <p className="trackname-layout">
        {trackNumber}. {trackName}
        <img
          src={isPlaying ? "/pause-button.png" : "/play-button.png"}
          alt={isPlaying ? "pause button" : "play button"}
          className="play-button"
          width="25px"
          onClick={handleButtonClick}
        />
      </p>
    </div>
  );
}

Track.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackNumber: PropTypes.number.isRequired,
};

export default Track;
