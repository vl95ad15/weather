function setDaysForecast(data) {
  const todayList = document.querySelector(".today-list");
  const futureForecast = document.querySelector(".future-forecast");

  let [currentDay, ...otherDays] = data.forecast.forecastday;

  console.log(otherDays);

  todayList.innerHTML = currentDay.hour
    .map((item, index) => {
      const currentHour = new Date().getHours();
      // const timeForecast = item.time.split(" ")[1];
      const timeForecast = index;
      if (currentHour < timeForecast) {
        return `<div class="today-list-item">
                    <span>${timeForecast + ":00"}</span>
                    <img src=${item.condition.icon}>
                    <span>${Math.round(item.temp_c) + "&deg;"}</span>
                </div>`;
      }
    })
    .join("");

  futureForecast.innerHTML = otherDays
    .map((item) => {
      const minMaxTemp = (day, minMax) => {
        const temp = [];
        day.hour.forEach((i) => temp.push(Math.round(i.temp_c)));
        if (minMax === "max") return Math.max.apply(null, temp) + "&deg;";
        if (minMax === "min") return Math.min.apply(null, temp) + "&deg;";
      };

      const date = new Date(item.date);
      const getWeekDay = () => {
        let options = { weekday: "long" };
        return new Intl.DateTimeFormat("en-US", options).format(date);
      };

      return `<div class="future-forecast-item">
                <div class="week-day">
                    <span>${getWeekDay()}</span>
                </div>
                <img src=${item.day.condition.icon}>
                <div class="temp">
                    <span class="day-temp">${minMaxTemp(item, "max")}</span>
                    <span class="night-temp">${minMaxTemp(item, "min")}</span>
                </div>
              </div>`;
    })
    .join("");
}

export default function setCurrentWeather(data) {
  document.querySelector(".city-name").textContent = data.location.name;
  document.querySelector(".degrees").innerHTML =
    Math.round(data.current.temp_c) + "&deg;";
  document.querySelector(".weather-type").textContent =
    data.current.condition.text;
  document.querySelector(".weather-img").src = data.current.condition.icon;
  document.querySelector(".precipitation").innerHTML = `
    <img src="http://cdn.onlinewebfonts.com/svg/img_499750.png">
    <span>${data.current.precip_in + "%"}</span>`;

  document.querySelector(".pressure").innerHTML = `
    <img src="https://i.dlpng.com/static/png/4575959-pressure-icon-png-397161-free-icons-library-pressure-png-512_512_preview.webp">
    <span>${data.current.pressure_mb + " mBar"}</span>
    `;

  document.querySelector(".wind").innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/172/172922.png">
    <span>${Math.round(data.current.wind_kph) + " km/h"}</span>
  `;
  document.querySelector(".sun-rise-info").textContent =
    data.forecast.forecastday[0].astro.sunrise;
  document.querySelector(".sun-rise-img").src =
    "https://pngimg.com/uploads/sun/sun_PNG13424.png";
  document.querySelector(".sun-set-info").textContent =
    data.forecast.forecastday[0].astro.sunset;
  document.querySelector(".sun-set-img").src =
    "https://pngimg.com/uploads/moon/moon_PNG46.png";
  setDaysForecast(data);
}
