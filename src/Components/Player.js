import cloud from "../assets/music/cloud.mp3";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faShuffle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PlayerControlBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const PlayerControl = styled.span`
  display: flex;
  margin-top: 20px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #27cd4e;
    font-size: 45px;
  }
`;

export function Player() {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const audioRef = useRef(new Audio(cloud));
  const rangeRef = useRef();
  const play = () => {
    setNowPlaying(true);
    audioRef.current.play();
  };
  const pause = () => {
    setNowPlaying(false);
    audioRef.current.pause();
  };
  console.log(audioRef);

  const changeRange = (event) => {
    audioRef.current.currentTime = event.target.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    rangeRef.current.style.setProperty(
      "--seek-before-width",
      `${(rangeRef.current.value / audioRef.duration) * 100}`
    );
    setCurrentTime(rangeRef.current.value);
  };

  return (
    <PlayerControlBox>
      <input
        type="range"
        defaultValue={0}
        ref={rangeRef}
        onChange={changeRange}
      ></input>
      <PlayerControl>
        <span>
          <FontAwesomeIcon icon={faShuffle} />
        </span>
        <span onClick={nowPlaying ? pause : play}>
          {nowPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </span>
      </PlayerControl>
    </PlayerControlBox>
  );
}

export default Player;
