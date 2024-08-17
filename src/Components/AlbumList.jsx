import { useState, useEffect, useRef } from "react";
import AlbumCard from "./AlbumCard";
import PropTypes from "prop-types";
import "./AlbumList.css";

function AlbumList({ artistId, limit, startIndex, albumsInfo }) {
  AlbumList.propTypes = {
    artistId: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    albumsInfo: PropTypes.array.isRequired,
    startIndex: PropTypes.number.isRequired,
  };

  const [albums, setAlbums] = useState([]);
  const [playingAlbumId, setPlayingAlbumId] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio());

  //Client credentials
  const clientId = "d4fdc1c5f8674fe3ad5b649018201b24";
  const clientSecret = "79cbccaaf4cf433c9b8c0c3a39179d65";

  //Fetching access token
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
        console.log("Album Data: ", data);
        setAlbums(data.items);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [artistId, limit, startIndex]);

  const handlePlayPause = (albumId) => {
    if (playingAlbumId === albumId) {
      // Pause the currently playing album
      setPlayingAlbumId(null);
      audioRef.current.pause();
      audioRef.current.src = ""; // Clear the source
    } else {
      // Play the new album
      if (playingAlbumId) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear the source
      }
      setPlayingAlbumId(albumId);
      setCurrentTrackIndex(0); // Reset track index when starting a new album
    }
  };

  useEffect(() => {
    const album = albumsInfo.find((album) => album.id === playingAlbumId);
    if (album) {
      const audio = audioRef.current;
      audio.src = album.trackfiles[currentTrackIndex];
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });

      audio.onended = () => {
        const nextTrackIndex =
          (currentTrackIndex + 1) % album.trackfiles.length;
        setCurrentTrackIndex(nextTrackIndex);
      };

      return () => {
        audio.pause();
        audio.src = ""; // Clear the source to prevent issues
      };
    }
  }, [playingAlbumId, currentTrackIndex, albumsInfo]);

  return (
    <div className="album-list">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          albumId={album.id}
          albumImage={album.images[1]?.url}
          albumName={album.name}
          albumArtistName={album.artists[0]?.name}
          albumsInfo={albumsInfo}
          isPlaying={playingAlbumId === album.id}
          onPlayPause={() => handlePlayPause(album.id)}
          currentTrackIndex={currentTrackIndex}
        />
      ))}
    </div>
  );
}

export default AlbumList;
