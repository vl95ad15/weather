import { apiKey } from "./api-key";
import { clearInput } from "./helpers";

async function getCurrentWeather(e) {
  // document
  //   .querySelector("#search-form")
  //   .addEventListener("submit", getCurrentWeather);

  // const city = document.querySelector(".search-field").value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Minsk&days=3&aqi=no&alerts=no`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
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
    })
    .catch((err) => {
      console.error(err);
      // alert(`City name ${city} doesn't exist`);
    });
  clearInput();
  e.preventDefault();
}

export default getCurrentWeather;
