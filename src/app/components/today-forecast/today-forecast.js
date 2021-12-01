import "./today-forecast.scss";
import Slider from "../../model/Slider";
import { createEl } from "../../functions/helpers";
import storage from "../../model/Storage";

function renderTodayForecastLineData(todayForecastLine) {
  const sliderData = storage.setSliderData();

  todayForecastLine.innerHTML = sliderData
    .map((item) => {
      const timeForecast = item.time.split(" ")[1];

      return `<div class="today-line-item">
                    <span>${timeForecast}</span>
                    <img src=${item.condition.icon} alt="">
                    <span>${Math.round(item.temp_c)}&deg;</span>
                 </div>`;
    })
    .join("");
}

export default function renderTodayForecast() {
  const slider = new Slider();
  const todayForecastContainer = createEl("div", "today-forecast-container");
  const todayForecastHeader = createEl("span", "today-header");
  todayForecastHeader.textContent = "Today";
  const todayForecastList = createEl("div", "today-list");
  const todayForecastLine = createEl("div", "today-line");

  const sliderPrev = createEl("button", "button btn-prev");
  sliderPrev.innerHTML = "<";
  sliderPrev.addEventListener("click", () =>
    slider.prevBtnSliderHandler(todayForecastLine)
  );

  const sliderNext = createEl("button", "button btn-next");
  sliderNext.innerHTML = ">";
  sliderNext.addEventListener("click", () =>
    slider.nextBtnSliderHandler(todayForecastLine)
  );

  todayForecastList.append(sliderPrev);
  todayForecastList.append(todayForecastLine);
  todayForecastList.append(sliderNext);
  todayForecastContainer.append(todayForecastHeader);
  todayForecastContainer.append(todayForecastList);
  renderTodayForecastLineData(todayForecastLine);

  return todayForecastContainer;
}
