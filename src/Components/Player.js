import cloud from "../assets/music/cloud.mp3";

export function Player() {
  const audio = new Audio(cloud);
  const handleClick = (event) => {
    audio.play();
  };

  return (
    <div>
      <input type="range"></input>
      <button>Change Ambient</button>
      <input type="button" onClick={handleClick} value={"play"} />
    </div>
  );
}

export default Player;
