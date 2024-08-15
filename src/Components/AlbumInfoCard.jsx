import PropTypes from "prop-types";

function AlbumInfoCard({ albumInfo }) {
  return (
    <div className="one-album-data">
      <img src={albumInfo.images[1].url} alt={albumInfo.name} />
      <div className="album-description">
        <h1>{albumInfo.name}</h1>
        <p>{albumInfo.label}</p>
      </div>
    </div>
  );
}

AlbumInfoCard.propTypes = {
  albumInfo: PropTypes.object.isRequired,
};

export default AlbumInfoCard;
