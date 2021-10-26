import "./index.html";
import "./styles/style.scss";
import renderMainPage from "./app/pages/page-main";
import { clearInput } from "./app/helpers";
import { apiKey } from "./app/api-key";
import getCurrentWeather from "./app/get-current-weather";

const root = document.querySelector("#root");
renderMainPage(root);
document.querySelector("#search-form").addEventListener("submit", getWeather);

function getWeather(e) {
  const city = document.querySelector(".search-field").value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getCurrentWeather(data);
    })
    .catch((err) => {
      console.error(err);
      alert(`City name ${city} doesn't exist`);
    });
  clearInput();
  e.preventDefault();
}
