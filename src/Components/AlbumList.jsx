import { useState, useEffect } from "react";

function AlbumList({ artistId, limit, startIndex }) {
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


  return <div className="album-list"></div>;
}
export default AlbumList;
