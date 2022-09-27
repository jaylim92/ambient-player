import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("");
  const api = {
    key: "542d7ac41806d60bd3788cededf7a96c",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };
  const city = "Seoul";
  const finalUrl = `${api.baseUrl}weather?q=${city}&units=metric&lang=kr&appid=${api.key}`;
  const getPosts = async () => {
    await axios
      .get(finalUrl)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setWeather({
          id: data.weather[0],
          temperature: data.main.temp,
          main: data.weather[0].main,
          city: data.name,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div>{weather.temperature}&deg;C</div>
      <div>{weather.main}</div>
      <div>{weather.city}</div>
    </div>
  );
}

export default Weather;
