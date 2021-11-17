function setDaysForecast(data) {
  const todayLine = document.querySelector(".today-line");
  const futureForecast = document.querySelector(".future-forecast");

  const [currentDay, ...nextDays] = data.forecast.forecastday;

  // function getSliderData() {
  //   const sliderData = [];
  //   const currentHour = new Date().getHours();
  //   currentDay.hour.forEach((item, index) =>
  //     index > currentHour ? sliderData.push(item) : null
  //   );
  //   nextDays[0].hour.forEach((item, index) =>
  //     index <= currentHour ? sliderData.push(item) : null
  //   );
  //   return sliderData;
  // }

  todayLine.innerHTML = getSliderData()
    .map((item) => {
      const timeForecast = item.time.split(" ")[1];

      return `<div class="today-line-item">
                    <span>${timeForecast}</span>
                    <img src=${item.condition.icon}>
                    <span>${Math.round(item.temp_c) + "&deg;"}</span>
                 </div>`;
    })
    .join("");

  futureForecast.innerHTML = nextDays
    .map((item) => {
      const minMaxTemp = (day, minMax) => {
        const temp = [];
        day.hour.forEach((i) => temp.push(Math.round(i.temp_c)));
        if (minMax === "max") return Math.max.apply(null, temp) + "&deg;";
        if (minMax === "min") return Math.min.apply(null, temp) + "&deg;";
      };

      const getWeekDay = () => {
        const date = new Date(item.date);
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
  setDaysForecast(data);
}
