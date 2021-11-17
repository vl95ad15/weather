import "../styles/home-page-style.scss";
import { clearRootElement, createEl } from "./functions/helpers";
import navBarItems from "./nav-bar-items";
import setupEventListeners from "./events/events";
import getEventHandlers from "./events/eventHandlers";
import weatherStorage from "./model/WeatherStorage";

function renderAppContainer() {
  const appContainer = createEl("div");
  appContainer.id = "app";

  return appContainer;
}

// function renderSearch() {
//   const searchWrapper = createEl("div", "search-wrapper");
//   const searchForm = createEl("form");
//   searchForm.id = "search-form";
//   const searchField = createEl("input", "search-field");
//   searchField.type = "search";
//   searchField.placeholder = "Enter your city...";
//   searchField.autofocus = true;
//   const resultsField = createEl("div", "results-field");
//   const resultsList = createEl("ul", "results-list");
//   searchField.oninput = () =>
//     searchResult(apiKey, searchField.value, resultsList);
//
//   searchWrapper.append(searchForm);
//   searchWrapper.append(resultsField);
//   resultsField.append(resultsList);
//   searchForm.append(searchField);
//
//   return searchWrapper;
// }

function renderMainInfo(city) {
  const mainInfoWrapper = createEl("div", "main-info-wrapper");
  const weatherImgBlock = createEl("div", "weather-img-block");
  const weatherImg = createEl("img", "weather-img");
  weatherImg.src = city.current.condition.icon;
  const mainInfoBlock = createEl("div", "main-info-block");
  const cityName = createEl("p", "city-name");
  cityName.textContent = city.location.name;
  const degrees = createEl("p", "degrees");
  degrees.innerHTML = Math.round(city.current.temp_c) + "&deg;";
  const weatherType = createEl("p", "weather-type");
  weatherType.textContent = city.current.condition.text;

  mainInfoWrapper.append(mainInfoBlock);
  mainInfoWrapper.append(weatherImgBlock);
  mainInfoBlock.append(cityName);
  mainInfoBlock.append(degrees);
  mainInfoBlock.append(weatherType);
  weatherImgBlock.append(weatherImg);

  return mainInfoWrapper;
}

function renderAdditionalInfo(city) {
  const additionalInfoWrapper = createEl("div", "additional-info");
  const precipitation = createEl("div", "precipitation");
  precipitation.innerHTML = `
    <img src="http://cdn.onlinewebfonts.com/svg/img_499750.png" alt="">
    <span>${city.current.precip_in + "%"}</span>`;
  const pressure = createEl("div", "pressure");
  pressure.innerHTML = `
    <img src="https://icons.veryicon.com/png/o/miscellaneous/streamline-light-icon/gauge-dashboard-1.png" alt="">
    <span>${city.current.pressure_mb + " mBar"}</span>
    `;
  const wind = createEl("div", "wind");
  wind.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/172/172922.png" alt="">
    <span>${Math.round(city.current.wind_kph) + " km/h"}</span>
  `;

  additionalInfoWrapper.append(precipitation);
  additionalInfoWrapper.append(pressure);
  additionalInfoWrapper.append(wind);

  return additionalInfoWrapper;
}

function renderSunRiseSetContainer(city) {
  const sunRiseSetContainer = createEl("div", "sun-rise-set-container");
  const sunRiseInfoBlock = createEl("div", "sun-rise-block block");
  const sunRiseInfo = createEl("span", "sun-rise-info");
  sunRiseInfo.textContent = city.forecast.forecastday[0].astro.sunrise;
  const sunRiseImg = createEl("img", "sun-rise-img img");
  sunRiseImg.src = "https://pngimg.com/uploads/sun/sun_PNG13424.png";
  sunRiseInfoBlock.append(sunRiseInfo);
  sunRiseInfoBlock.append(sunRiseImg);
  const sunSetInfoBlock = createEl("div", "sun-set-block block");
  const sunSetInfo = createEl("span", "sun-set-info");
  sunSetInfo.textContent = city.forecast.forecastday[0].astro.sunset;
  const sunSetImg = createEl("img", "sun-set-img img");
  sunSetImg.src = "https://pngimg.com/uploads/moon/moon_PNG46.png";
  sunSetInfoBlock.append(sunSetImg);
  sunSetInfoBlock.append(sunSetInfo);

  sunRiseSetContainer.append(sunRiseInfoBlock);
  sunRiseSetContainer.append(sunSetInfoBlock);

  return sunRiseSetContainer;
}

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
                    <span>${Math.round(item.temp_c) + "&deg;"}</span>
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

  forecastContainer.append(renderSunRiseSetContainer(city));
  forecastContainer.append(todayForecastContainer);
  forecastContainer.append(futureForecastListContainer);

  return forecastContainer;
}

function renderContent(city) {
  const infoContainer = createEl("div", "info-container");

  if (city) {
    infoContainer.append(renderMainInfo(city));
    infoContainer.append(renderAdditionalInfo(city));
    infoContainer.append(renderForecastContainer(city));
  }

  // if (window.location.href.indexOf("home") !== -1) {
  //   infoContainer.append(renderMainInfo());
  //   infoContainer.append(renderAdditionalInfo());
  //   infoContainer.append(renderForecastContainer());
  // }
  //
  // if (window.location.href.indexOf("favorite") !== -1) {
  //   infoContainer.append(renderSearch());
  //   infoContainer.append(renderFavoritesContainer());
  // }

  return infoContainer;
}

// function renderFavoritesContainer() {
//   const favoritesContainer = createEl("div", "fav-container");
//
//   return favoritesContainer;
// }

function renderNavBar() {
  const navBarContainer = createEl("div", "nav-bar-container");
  const navBarList = createEl("ul", "nav-bar-list");
  navBarList.innerHTML = navBarItems
    .map((item) => `<li class="nav-item ${item.toLowerCase()}">${item}</li>`)
    .join("");
  navBarContainer.append(navBarList);

  return navBarContainer;
}

export default function renderMainPage(doc, city) {
  const rootElement = clearRootElement();
  const appContainer = renderAppContainer();

  // appContainer.append(renderSearch());
  appContainer.append(renderNavBar());
  appContainer.append(renderContent(city));

  rootElement.append(appContainer);
  setupEventListeners(doc, getEventHandlers(doc));
}
