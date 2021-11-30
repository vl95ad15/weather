import City from "./City.js";

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
    console.log(data);
    const convertedCityData = this.convertData(data);
    this.currentCity = convertedCityData;
    console.log(convertedCityData);
    return convertedCityData;
  }

  getWeatherSearchResult(item, key) {
    const searchValue = item.name.split(",")[0];
    const result = this.getCity(key, searchValue);
    this.currentCity = result;
  }

  async searchResult(key, value) {
    const url = `https://api.weatherapi.com/v1/search.json?key=${key}&q=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    const returnedData = data.splice(0, 3);
    this.searchData = returnedData;
    console.log(this.searchData);

    return returnedData;
  }

  addToFav() {
    const favorites = this.favorites;
    this.currentCity.isFav = true;
    favorites.push(this.currentCity);
  }
}

const storage = new Storage();

export default storage;
