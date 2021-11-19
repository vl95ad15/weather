import getWeekDay from "../getters/get-week-day";
import minMaxTemp from "../min-max-temp";

export default function renderFutureForecastListData(
  futureForecastListContainer,
  nextDays
) {
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
