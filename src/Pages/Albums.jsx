import AlbumList from "../Components/AlbumList";

function Albums() {
  return (
    <div className="album-container">
      <AlbumList artistId="7EjxNoVjXo7gL73F2EdXVA" limit={6} startIndex={0} />
    </div>
  );
}

export default Albums;
