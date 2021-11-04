export default function setCurrentWeather(data) {
  document.querySelector(".city-name").textContent = data.location.name;
  document.querySelector(".degrees").innerHTML =
    Math.round(data.current.temp_c) + "&deg;";
  document.querySelector(".weather-type").textContent =
    data.current.condition.text;
  document.querySelector(".weather-img").src = data.current.condition.icon;

  document.querySelector(".precipitation").innerHTML =
    data.current.precip_in + "%";
  document.querySelector(".pressure").innerHTML =
    data.current.pressure_mb + " mBar";
  document.querySelector(".wind").innerHTML =
    Math.round(data.current.wind_kph) + " km/h";
}
