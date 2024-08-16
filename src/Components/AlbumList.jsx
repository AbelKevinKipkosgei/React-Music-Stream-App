import { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import PropTypes from "prop-types";
import "./AlbumList.css";

function AlbumList({ artistId, limit, startIndex, albumsInfo }) {
  AlbumList.propTypes = {
    artistId: PropTypes.string.isRequired, // This ensures artistId is passed as a string and is required
    limit: PropTypes.number.isRequired, // This ensures limit is passed as a number and is required
    albumsInfo: PropTypes.array.isRequired,
    startIndex: PropTypes.number.isRequired, // This ensures startIndex is passed as a number and is required
  };
  const [albums, setAlbums] = useState([]);
  // Constants for client ID and client secret
  const clientId = "d4fdc1c5f8674fe3ad5b649018201b24";
  const clientSecret = "79cbccaaf4cf433c9b8c0c3a39179d65";

  // Function to fetch access token using client credentials flow
  const getAccessToken = async () => {
    const url = "https://accounts.spotify.com/api/token";
    const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      const accessToken = await getAccessToken();
      const url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=${limit}&offset=${startIndex}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        console.log("Album Data:", data);
        setAlbums(data.items);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [artistId, limit, startIndex]);

  return (
    <div className="album-list">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          albumImage={album.images[1]?.url}
          albumName={album.name}
          albumArtistName={album.artists[0]?.name}
          albumId={album.id}
          albumsInfo={albumsInfo}
        />
      ))}
    </div>
  );
}
export default AlbumList;
