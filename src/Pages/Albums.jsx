import AlbumList from "../Components/AlbumList";
import PropTypes from "prop-types";

function Albums({ albumsInfo }) {
  Albums.propTypes = {
    albumsInfo: PropTypes.array.isRequired,
  };
  return (
    <div className="album-container">
      <AlbumList
        artistId="7EjxNoVjXo7gL73F2EdXVA"
        limit={6}
        startIndex={0}
        albumsInfo={albumsInfo}
      />
      <AlbumList
        artistId="7dGJo4pcD2V6oG8kP0tJRR"
        limit={8}
        startIndex={0}
        albumsInfo={albumsInfo}
      />
      <AlbumList
        artistId="23zg3TcAtWQy7J6upgbUnj"
        limit={8}
        startIndex={0}
        albumsInfo={albumsInfo}
      />
    </div>
  );
}

export default Albums;
