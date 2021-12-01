import "./future-forecast.scss";
import { createEl } from "../../functions/helpers";
import getWeekDay from "../../functions/get-week-day";
import minMaxTemp from "../../functions/min-max-temp";
import storage from "../../model/Storage";

function renderFutureForecastListData(futureForecastListContainer) {
  const nextDays = storage.setFutureData();
  futureForecastListContainer.innerHTML = nextDays
    .map((item) => {
      const weekDay = getWeekDay(item);
      const maxTemp = minMaxTemp(item, "max");
      const minTemp = minMaxTemp(item, "min");

      return `<div class="future-forecast-item">
                <div class="week-day">
                    <span>${weekDay}</span>
                </div>
                <img src=${item.day.condition.icon} alt="">
                <div class="temp">
                    <span class="day-temp">${maxTemp}&deg;</span>
                    <span class="night-temp">${minTemp}&deg;</span>
                </div>
              </div>`;
    })
    .join("");
}

export default function renderFutureForecast() {
  const futureForecastListContainer = createEl("div", "future-forecast");

  renderFutureForecastListData(futureForecastListContainer);

  return futureForecastListContainer;
}
