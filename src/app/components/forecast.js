import { createEl } from "../functions/helpers";
import renderSunRiseSetContainer from "./sun-rise-set";
import getSliderData from "../functions/getters/get-slider-data";
import renderTodayForecastLineData from "../functions/render/render-today-foreacast-line-data";
import renderFutureForecastListData from "../functions/render/render-future-forecast-list-data";

const renderData = (city, todayForecastLine, futureForecastListContainer) => {
  const [currentDay, ...nextDays] = city.forecast.forecastday;
  const sliderData = getSliderData(currentDay, nextDays);

  renderTodayForecastLineData(todayForecastLine, sliderData);
  renderFutureForecastListData(futureForecastListContainer, nextDays);
};

export default function renderForecastContainer(city) {
  const forecastContainer = createEl("div", "forecast-container");
  const todayForecastContainer = createEl("div", "today-forecast-container");
  const todayForecastHeader = createEl("p", "today-header");
  todayForecastHeader.textContent = "Today";
  const todayForecastList = createEl("div", "today-list");
  const todayForecastLine = createEl("div", "today-line");

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

  forecastContainer.append(renderSunRiseSetContainer(city));
  forecastContainer.append(todayForecastContainer);
  forecastContainer.append(futureForecastListContainer);

  renderData(city, todayForecastLine, futureForecastListContainer);

  return forecastContainer;
}
