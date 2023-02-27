import { imgUrlState, weatherInfo } from '../atom';
import styled from 'styled-components';
import Weather from './Weather';
import DateView from './DateView';
import { Player } from './Player';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import axios from 'axios';

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
  const { isLoading } = useQuery(
    ['unSplashImg', weatherState?.weather[0].main],
    async () => {
      const ACCESS_KEY = 'RLpcHh1NwoBWBhBdjWj02AwpsccAlIAGM6LMXlL1IdI';
      const weather = weatherState?.weather[0].main;
      const baseUrl = 'https://api.unsplash.com/search/photos/?';
      const response = await axios.get(
        `${baseUrl}client_id=${ACCESS_KEY}&query=${weather}&orientation=portrait&page=1&per_page=1`
      );
      setImgUrl(response.data);
    }
  );
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
