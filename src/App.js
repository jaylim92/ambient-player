import Player from "./Player";
import bg from "./assets/humid-bg.png";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <Weather />
      <Player></Player>
      <img src={bg} alt="humid-bg" style={{ width: "500px" }} />
    </div>
  );
}

export default App;
