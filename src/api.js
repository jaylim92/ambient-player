const API_KEY = "542d7ac41806d60bd3788cededf7a96c";
let longitude = "";
let latitude = "";

function onGeoOk(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

export async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  );
  return await response.json();
}

export async function getBackgroundImg(weather) {
  const ACCESS_KEY = "RLpcHh1NwoBWBhBdjWj02AwpsccAlIAGM6LMXlL1IdI";
  const baseUrl = "https://api.unsplash.com/search/photos/?";
  const response = await fetch(
    `${baseUrl}client_id=${ACCESS_KEY}&query=${weather}&orientation=portrait&page=1&per_page=1`
  );
  return await response.json();
}
