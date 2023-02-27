import BackGroundImg from './Components/BackGroundImg';
import GlobalStyles from './styles/global-styles';
import { useRecoilState } from 'recoil';
import { weatherInfo } from './atom';
import { useQuery } from 'react-query';
import axios from 'axios';
export interface IWeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

function App() {
  const [weather, setWeather] = useRecoilState(weatherInfo);
  const { isLoading } = useQuery(['weather'], async () => {
    const API_KEY = '542d7ac41806d60bd3788cededf7a96c';

    const position = await new Promise(
      (resolve: PositionCallback, reject: PositionErrorCallback) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
    const { latitude, longitude } = position.coords;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(response.data);
    setWeather(response.data);
  });

  return (
    <>
      {isLoading ? (
        'Now Loading....'
      ) : (
        <>
          <GlobalStyles />
          <BackGroundImg></BackGroundImg>
        </>
      )}
    </>
  );
}

export default App;
