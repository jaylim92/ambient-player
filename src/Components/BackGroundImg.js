import { weatherInfo } from "../atom";
import bg from "../assets/humid-bg.png";
import styled from "styled-components";
import Weather from "./Weather";
import DateView from "./DateView";
import { Player } from "./Player";
import useGeolocation from "../hooks/useGeolocation";

const BackImg = styled.section`
  display: grid;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${bg})`};
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PlayerBox = styled.div`
  display: flex;
  margin-top: 5%;
  width: 500px;
`;

function BackGroundImg(weatherInfo) {
  const location = useGeolocation();
  return (
    <BackImg>
      <InfoBox>
        <Weather props={location} />
        <DateView />
      </InfoBox>
      <PlayerBox>
        <Player />
      </PlayerBox>
    </BackImg>
  );
}

export default BackGroundImg;
