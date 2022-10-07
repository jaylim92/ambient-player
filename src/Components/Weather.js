import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faSun,
  faCloud,
  faCloudRain,
  faCloudBolt,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { weatherInfo } from "../atom";
import { useQuery } from "react-query";
import { getWeatherData } from "../api";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
`;

const Degree = styled.span`
  font-size: 90px;
  font-weight: 700;
  letter-spacing: -5px;
  margin-bottom: 20px;

  span:nth-child(1) {
    font-size: 70px;
    position: relative;
    top: -20px;
    left: 5px;
  }
`;
const Location = styled.span`
  display: flex;
  font-weight: 800;
  font-size: 40px;
  flex-direction: column;
  align-items: flex-end;
  span:nth-child(1) {
    font-size: 20px;
    font-weight: 300;
  }
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  .icon {
    font-size: 50px;
  }
`;

function Weather() {
  const { isLoading, data } = useQuery("weather", getWeatherData);
  const setWeatherState = useSetRecoilState(weatherInfo);
  const iconFa = {
    Clear: faSun,
    Clouds: faCloud,
    Rain: faCloudRain,
    Thunderstorm: faCloudBolt,
    Snow: faSnowflake,
    Mist: faWater,
    Haze: faWater,
  };
  setWeatherState(data?.weather[0]?.main);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Wrapper>
          <Degree>
            {Math.floor(data?.main?.temp)}
            <span> &deg;</span>
            <span>C</span>
          </Degree>
          <Info>
            <Location>
              {data?.name}
              <span>{data?.sys?.country}</span>
            </Location>
            <Icon>
              <FontAwesomeIcon
                icon={iconFa[`${data?.weather[0]?.main}`]}
                className="icon"
              />
            </Icon>
          </Info>
        </Wrapper>
      )}
    </>
  );
}

export default Weather;
