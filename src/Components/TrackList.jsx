import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";
import Track from "./Track";

function TrackList({ albumTracks, tracksInfo }) {
  const [playingTrackIndex, setPlayingTrackIndex] = useState(null);
  const audioRef = useRef(null);

  const playTrack = useCallback(
    async (trackIndex) => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear the source to avoid interruptions
      }

      const selectedTrack = tracksInfo.find(
        (track) => track.trackId === albumTracks[trackIndex].id
      );

      if (selectedTrack) {
        audioRef.current = new Audio(selectedTrack.trackSrc);
        try {
          await audioRef.current.play();
          console.log("Playing track:", selectedTrack.trackSrc); // Log to verify audio is playing
          setPlayingTrackIndex(trackIndex);
        } catch (error) {
          console.error("Error playing the track:", error);
        }
      } else {
        console.error("Selected track not found:", albumTracks[trackIndex].id);
      }
    },
    [tracksInfo, albumTracks]
  );

  const handlePlayPauseClick = async (trackIndex) => {
    if (playingTrackIndex === trackIndex) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingTrackIndex(null);
    } else {
      await playTrack(trackIndex);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.onended = () => {
        const nextTrackIndex = (playingTrackIndex + 1) % albumTracks.length;
        playTrack(nextTrackIndex); // Automatically play the next track
      };

      return () => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      };
    }
  }, [playingTrackIndex, playTrack, albumTracks.length]);

  return (
    <>
      {albumTracks.map((track, index) => (
        <ol key={track.id}>
          <Track
            trackName={track.name}
            trackNumber={track.track_number}
            isPlaying={playingTrackIndex === index}
            onPlayPauseClick={() => handlePlayPauseClick(index)}
          />
        </ol>
      ))}
    </>
  );
}

TrackList.propTypes = {
  albumTracks: PropTypes.array.isRequired,
  tracksInfo: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrackList;
