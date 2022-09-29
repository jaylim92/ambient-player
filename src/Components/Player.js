import cloud from "../assets/music/cloud.mp3";
import { useState, useRef } from "react";

export function Player() {
  const [nowPlaying, setNowPlaying] = useState(false);
  const audioRef = useRef(new Audio(cloud));
  const play = () => {
    setNowPlaying(true);
    audioRef.current.play();
  };
  const pause = () => {
    setNowPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div>
      <input type="range"></input>
      <button>Change Ambient</button>
      <button onClick={nowPlaying ? pause : play}>
        {nowPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Player;
