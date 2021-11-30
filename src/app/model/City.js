export default class City {
  constructor(
    name,
    country,
    temp,
    img,
    weatherType,
    precipitation,
    pressure,
    wind,
    daysForecast
  ) {
    this.name = name;
    this.country = country;
    this.temp = temp;
    this.img = img;
    this.weatherType = weatherType;
    this.precipitation = precipitation;
    this.pressure = pressure;
    this.wind = wind;
    this.daysForecast = daysForecast;
    this.isFav = false;
  }
}
