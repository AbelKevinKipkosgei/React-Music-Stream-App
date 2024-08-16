import PropTypes from "prop-types";
import Track from "./Track";

function TrackList({ albumTracks }) {
  TrackList.propTypes = {
    albumTracks: PropTypes.array.isRequired,
  };
  return (
    <>
      {albumTracks.map((track) => (
        <ol key={track.id}>
          <Track trackName={track.name} trackNumber={track.track_number} />
        </ol>
      ))}
    </>
  );
}
export default TrackList;
