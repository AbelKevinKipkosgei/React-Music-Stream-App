import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumInfoCard from "../Components/AlbumInfoCard";

function AlbumInfo() {
  const [albumInfo, setAlbumInfo] = useState(null); // Start with null
  const param = useParams();
  const albumId = param.id;

  const clientId = "d4fdc1c5f8674fe3ad5b649018201b24";
  const clientSecret = "79cbccaaf4cf433c9b8c0c3a39179d65";

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
      const url = `https://api.spotify.com/v1/albums/${albumId}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        console.log("AlbumInfo Data:", data);
        setAlbumInfo(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [albumId]);

  // Conditional rendering to avoid errors
  if (!albumInfo) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <div className="album-info">
      <AlbumInfoCard albumInfo={albumInfo} />
    </div>
  );
}

export default AlbumInfo;
