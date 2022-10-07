import { imgUrlState, weatherInfo } from "../atom";
import styled from "styled-components";
import Weather from "./Weather";
import DateView from "./DateView";
import { Player } from "./Player";
import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { getBackgroundImg } from "../api";

const BackImg = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.backgrounImg})`};
`;

const Wrapper = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;
`;
const PlayerBox = styled.div`
  display: flex;
  margin-top: 5%;
  width: 500px;
  padding: 0 10%;
`;

function BackGroundImg() {
  const weatherState = useRecoilValue(weatherInfo);
  const [imgUrl, setImgUrl] = useRecoilState(imgUrlState);
  const { isLoading, data } = useQuery(["unSplashImg", weatherState], () =>
    getBackgroundImg(weatherState)
  );
  setImgUrl(data);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BackImg backgrounImg={`${imgUrl?.results[0]?.urls?.regular}`}>
          <Wrapper>
            <InfoBox>
              <Weather />
              <DateView />
            </InfoBox>
            <PlayerBox>
              <Player />
            </PlayerBox>
          </Wrapper>
        </BackImg>
      )}
    </>
  );
}

export default BackGroundImg;
