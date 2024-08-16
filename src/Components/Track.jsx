import PropTypes from "prop-types";
import "./Track.css"; // Import the CSS file for styling

function Track({ trackName, trackNumber }) {
  return (
    <div className="trackname">
      <p className="trackname-layout">
        {trackNumber}. {trackName}{" "}
        <img
          src="../../public/play-button.png"
          alt="play button"
          className="play-button"
          width="25px"
        />
      </p>
    </div>
  );
}

Track.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackNumber: PropTypes.string.isRequired,
};

export default Track;
