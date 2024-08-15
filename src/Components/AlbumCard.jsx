import PropTypes from "prop-types"

function AlbumCard({ albumImage, albumName, albumArtistName }) {
  AlbumCard.propTypes = {
    albumImage: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumArtistName: PropTypes.string.isRequired
  };
  return (
    <div className="album">
      <button type="button" className="album-button">
        <img src={albumImage} />
        <p>{albumName}</p>
        <p>{albumArtistName}</p>
      </button>
    </div>
  );
}
export default AlbumCard;
