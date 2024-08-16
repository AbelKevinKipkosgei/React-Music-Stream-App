import PropTypes from "prop-types";

function Track({ trackName, trackNumber }) {
  Track.propTypes = {
    trackName: PropTypes.string.isRequired,
    trackNumber: PropTypes.string.isRequired,
  };
  return (
    <div className="trackname">
      <p className="trackname-layout">
        {trackNumber}. {trackName}
      </p>
    </div>
  );
}
export default Track;
