import City from "./City.js";
import configureRouter from "../router/router-config";

class Storage {
  constructor() {
    this.offset = 0;
    this.defaultCity = "Minsk";
    this.favorites = [];
    this.currentCity = null;
    this.searchData = null;
  }

  convertData(data) {
    const city = new City(data);
    city.name = data.location.name;
    city.country = data.location.country;
    city.temp = Math.round(data.current.temp_c);
    city.img = data.current.condition.icon;
    city.weatherType = data.current.condition.text;
    city.precipitation = data.current.precip_in * 1000;
    city.pressure = data.current.pressure_mb;
    city.wind = Math.round(data.current.wind_kph);
    city.daysForecast = data.forecast.forecastday;

    return city;
  }

  async getCity(key, city = this.defaultCity) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error with status ${response.status}`);
      return;
    }
    console.log(`Ok with status ${response.status}`);
    const data = await response.json();
    const convertedCityData = this.convertData(data);
    this.currentCity = convertedCityData;
    return convertedCityData;
  }

  async getWeatherSearchResult(item, key) {
    const searchValue = item.split(",")[0];
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchValue}&days=3&aqi=no&alerts=no`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error with status ${response.status}`);
      return;
    }
    console.log(`Ok with status ${response.status}`);
    const data = await response.json();
    this.currentCity = this.convertData(data);
    const router = configureRouter("/");
    router.navigate("/");
  }

  async searchResult(key, value) {
    const url = `https://api.weatherapi.com/v1/search.json?key=${key}&q=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    const returnedData = data.splice(0, 3);
    this.searchData = returnedData;

    return returnedData;
  }

  addRemoveFav() {
    const favorites = this.favorites;
    if (!this.currentCity.isFav) {
      this.currentCity.isFav = true;
      favorites.push(this.currentCity);
    } else {
      const index = favorites.indexOf(this.currentCity);
      if (index > -1) {
        this.currentCity.isFav = false;
        favorites.splice(index, 1);
      }
    }
  }
}

const storage = new Storage();

export default storage;
