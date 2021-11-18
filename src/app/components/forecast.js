import { createEl } from "../functions/helpers";
import weatherStorage from "../model/WeatherStorage";
import renderSunRiseSetContainer from "./sun-rise-set";

function renderForecastContainer(city) {
  const forecastContainer = createEl("div", "forecast-container");
  const todayForecastContainer = createEl("div", "today-forecast-container");
  const todayForecastHeader = createEl("p", "today-header");
  todayForecastHeader.textContent = "Today";
  const todayForecastList = createEl("div", "today-list");
  const todayForecastLine = createEl("div", "today-line");

  const [currentDay, ...nextDays] = city.forecast.forecastday;
  todayForecastLine.innerHTML = weatherStorage
    .getSliderData(currentDay, nextDays)
    .map((item) => {
      const timeForecast = item.time.split(" ")[1];

      return `<div class="today-line-item">
                    <span>${timeForecast}</span>
                    <img src=${item.condition.icon}>
                    <span>${Math.round(item.temp_c)}&deg;</span>
                 </div>`;
    })
    .join("");

  const sliderPrev = createEl("button", "button btn-prev");
  sliderPrev.innerHTML = "<";
  const sliderNext = createEl("button", "button btn-next");
  sliderNext.innerHTML = ">";

  todayForecastList.append(sliderPrev);
  todayForecastList.append(todayForecastLine);
  todayForecastList.append(sliderNext);
  todayForecastContainer.append(todayForecastHeader);
  todayForecastContainer.append(todayForecastList);

  const futureForecastListContainer = createEl("div", "future-forecast");
  futureForecastListContainer.innerHTML = nextDays
    .map((item) => {
      const minMaxTemp = (day, minMax) => {
        const temp = [];
        day.hour.forEach((i) => temp.push(Math.round(i.temp_c)));
        console.log(day.hour);
        if (minMax === "max") return Math.max(...temp);
        if (minMax === "min") return Math.min(...temp);
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
                    <span class="day-temp">${minMaxTemp(
                      item,
                      "max"
                    )}&deg;</span>
                    <span class="night-temp">${minMaxTemp(
                      item,
                      "min"
                    )}&deg;</span>
                </div>
              </div>`;
    })
    .join("");

  forecastContainer.append(renderSunRiseSetContainer(city));
  forecastContainer.append(todayForecastContainer);
  forecastContainer.append(futureForecastListContainer);

  return forecastContainer;
}

export default renderForecastContainer;
