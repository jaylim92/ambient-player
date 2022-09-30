import axios from "axios";
import { useEffect, useState } from "react";
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

function Weather(location) {
  const [weather, setWeather] = useState("");
  const {
    props: { lat, lng },
  } = location;

  const api = {
    key: "542d7ac41806d60bd3788cededf7a96c",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    lat,
    lng,
  };

  const finalUrl = `${api.baseUrl}weather?lat=${api.lat}&lon=${api.lng}&units=metric&lang=kr&appid=${api.key}`;

  const iconFa = {
    Clear: faSun,
    Clouds: faCloud,
    Rain: faCloudRain,
    Thunderstorm: faCloudBolt,
    Snow: faSnowflake,
    Mist: faWater,
  };

  const getPosts = async () => {
    await axios
      .get(finalUrl)
      .then((res) => {
        const data = res.data;
        setWeather({
          id: data.weather[0],
          temperature: data.main.temp,
          main: data.weather[0].main,
          city: data.name,
          icon: data.weather[0].icon,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts(location);
  }, [location]);

  let iconCode = iconFa[`${weather.main}`];
  return (
    <Wrapper>
      <Degree>
        {Math.floor(weather.temperature)}
        <span> &deg;</span>
        <span>C</span>
      </Degree>
      <Info>
        <Location>
          {weather.main}
          <span>{weather.city}</span>
        </Location>
        <Icon>
          <FontAwesomeIcon icon={iconCode} className="icon" />
        </Icon>
      </Info>
    </Wrapper>
  );
}

export default Weather;
