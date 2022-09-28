import Player from "./Components/Player";
import bg from "./assets/humid-bg.png";
import Weather from "./Components/Weather";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const location = useGeolocation();

  return (
    <div>
      <Weather props={location} />
      <Player></Player>
      <img src={bg} alt="humid-bg" style={{ width: "500px" }} />
    </div>
  );
}

export default App;
