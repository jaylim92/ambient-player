import Player from "./Components/Player";
import bg from "./assets/humid-bg.png";
import Weather from "./Components/Weather";
import useGeolocation from "./hooks/useGeolocation";
import styled from "styled-components";
import GlobalStyles from "./styles/global-styles";
import DateView from "./Components/DateView";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 40px;
`;

const BackGroundImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: ${(props) => `url(${bg})`};
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 20%;
  flex-direction: column;
`;
const PlayerBox = styled.div`
  display: flex;
  margin-right: 20%;
  margin-top: 5%;
`;

function App() {
  const location = useGeolocation();

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BackGroundImg background={bg}>
          <InfoBox>
            <Weather props={location} />
            <DateView />
          </InfoBox>
          <PlayerBox>
            <Player />
          </PlayerBox>
        </BackGroundImg>
      </Wrapper>
    </>
  );
}

export default App;
