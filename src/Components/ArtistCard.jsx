import PropTypes from "prop-types";
import "./ArtistCard.css";

function ArtistCard({ artistImage, artistName, artistType }) {
  return (
    <div className="artist-card">
      <img src={artistImage} alt={`${artistName} image`} />
      <div className="artist-info">
        <h3>{artistName}</h3>
        <p>{artistType}</p>
      </div>
    </div>
  );
}

ArtistCard.propTypes = {
  artistImage: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artistType: PropTypes.string.isRequired,
};

export default ArtistCard;
