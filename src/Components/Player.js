import cloud from "../assets/music/cloud.mp3";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faShuffle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PlayerControlBox = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
`;

const PlayerProgressBar = styled.input`
  display: flex;
  width: 80%;
  margin-left: 120px;
  -webkit-appearance: none;
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    border-radius: 15px;
    cursor: pointer;
    background: white;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-top: -5px;
    background-color: #27cd4e;
  }
`;

const PlayerControl = styled.span`
  display: flex;
  margin-top: 20px;
  margin-right: 5px;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #27cd4e;
    font-size: 25px;
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

  const changeRange = (event) => {
    const { value } = event.target;
    console.log(value);
    audioRef.current.currentTime = value;
    console.log(rangeRef);
    if (audioRef.current.currentTime === audioRef.current.duration - 1) {
      setNowPlaying(false);
      audioRef.current.currentTime = 0;
      rangeRef.current.value = 0;
    }
  };

  return (
    <PlayerControlBox>
      <PlayerProgressBar
        type="range"
        defaultValue={0}
        min={0}
        max={audioRef.current.duration - 1}
        ref={rangeRef}
        onChange={changeRange}
      ></PlayerProgressBar>
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
