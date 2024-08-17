import { useState, useEffect } from "react";

function ArtistList() {
  const [artists, setArtists] = useState([]);

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
    const fetchArtists = async () => {
      const accessToken = await getAccessToken();
      const url =
        "https://api.spotify.com/v1/artists?ids=64M6ah0SkkRsnPGtGiRAbb%2C1HBjj22wzbscIZ9sEb5dyf%2C7CajNmpbOovFoOoasH2HaY%2C4OBJLual30L7gRl5UkeRcT%2C1ZwdS5xdxEREPySFridCfh%2C1OFOShsIbhy1l5x73yuVyB%2C3BHsFg7FtIpq3EB54et7H3%2C21E3waRsmPlU7jZsS13rcj%2C7vk5e3vY1uw9plTHJAMwjN%2C7bXgB6jMjp9ATFy66eO08Z%2C0hCNtLu0JehylgoiP8L4Gh%2C6ueGR6SWhUJfvEhqkvMsVs%2C02kJSzxNuaWGqwubyUba0Z%2C55Aa2cqylxrFIXC767Z865%2C0TnOYISbd1XYRBk9myaseg%2C5pKCCKE2ajJHZ9KAiaK11H%2C3wcj11K77LjEY1PkEazffa%2C23zg3TcAtWQy7J6upgbUnj%2C7EjxNoVjXo7gL73F2EdXVA%2C7dGJo4pcD2V6oG8kP0tJRR";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        console.log("Artist Data: ", data);
        setArtists(data.artists);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchArtists();
  }, []);
  return <div className="artist-list"></div>;
}
export default ArtistList;
