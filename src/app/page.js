import "../styles/page-style.scss";
import { clearRootElement, createEl } from "./functions/helpers";
import { apiKey } from "./api-key";
import { searchResult } from "./functions/storage";
import navBarItems from "./nav-bar-items";

function renderAppContainer() {
  const appContainer = createEl("div");
  appContainer.id = "app";

  return appContainer;
}

function renderSearch() {
  const searchWrapper = createEl("div", "search-wrapper");
  const searchForm = createEl("form");
  searchForm.id = "search-form";
  const searchField = createEl("input", "search-field");
  searchField.type = "search";
  searchField.placeholder = "Enter your city...";
  searchField.autofocus = true;
  const resultsField = createEl("div", "results-field");
  const resultsList = createEl("ul", "results-list");
  searchField.oninput = () =>
    searchResult(apiKey, searchField.value, resultsList);

  searchWrapper.append(searchForm);
  searchWrapper.append(resultsField);
  resultsField.append(resultsList);
  searchForm.append(searchField);

  return searchWrapper;
}

function renderMainInfo() {
  const mainInfoWrapper = createEl("div", "main-info-wrapper");
  const weatherImgBlock = createEl("div", "weather-img-block");
  const weatherImg = createEl("img", "weather-img");
  const mainInfoBlock = createEl("div", "main-info-block");
  const cityName = createEl("p", "city-name");
  const degrees = createEl("p", "degrees");
  const weatherType = createEl("p", "weather-type");

  mainInfoWrapper.append(mainInfoBlock);
  mainInfoWrapper.append(weatherImgBlock);
  mainInfoBlock.append(cityName);
  mainInfoBlock.append(degrees);
  mainInfoBlock.append(weatherType);
  weatherImgBlock.append(weatherImg);

  return mainInfoWrapper;
}

function renderAdditionalInfo() {
  const additionalInfoWrapper = createEl("div", "additional-info");
  const precipitation = createEl("div", "precipitation");
  const pressure = createEl("div", "pressure");
  const wind = createEl("div", "wind");

  additionalInfoWrapper.append(precipitation);
  additionalInfoWrapper.append(pressure);
  additionalInfoWrapper.append(wind);

  return additionalInfoWrapper;
}

function renderForecastContainer() {
  const forecastContainer = createEl("div", "forecast-container");
  const sunRiseSetContainer = createEl("div", "sun-rise-set");
  const todayForecastContainer = createEl("div", "today-forecast");
  const todayForecastHeader = createEl("span", "today-header");
  todayForecastHeader.textContent = "Today";
  const todayForecastList = createEl("div", "today-list");
  todayForecastContainer.append(todayForecastHeader);
  todayForecastContainer.append(todayForecastList);
  const futureForecastListContainer = createEl("div", "future-forecast");
  forecastContainer.append(sunRiseSetContainer);
  forecastContainer.append(todayForecastContainer);
  forecastContainer.append(futureForecastListContainer);

  return forecastContainer;
}

function renderContent() {
  const infoContainer = createEl("div", "info-container");

  if (window.location.href.indexOf("home") !== -1) {
    infoContainer.append(renderMainInfo());
    infoContainer.append(renderAdditionalInfo());
    infoContainer.append(renderForecastContainer());
  }

  if (window.location.href.indexOf("favorite") !== -1) {
    infoContainer.append(renderSearch());
    infoContainer.append(renderFavoritesContainer());
  }

  return infoContainer;
}

function renderFavoritesContainer() {
  const favoritesContainer = createEl("div", "fav-container");

  return favoritesContainer;
}

function renderNavBar() {
  const navBarContainer = createEl("div", "nav-bar-container");
  const navBarList = createEl("ul", "nav-bar-list");
  navBarList.innerHTML = navBarItems
    .map((item) => `<li class="nav-item ${item.toLowerCase()}">${item}</li>`)
    .join("");
  navBarContainer.append(navBarList);

  // navBarContainer.innerHTML = `<ul class="nav-bar-list">
  //                               <li class="home nav-item">Home</li>
  //                               <li class="details nav-item">Details</li>
  //                               <li class="fav nav-item">Favorites</li>
  //                               <li class="settings nav-item">Settings</li>
  //                              </ul>`;
  return navBarContainer;
}

export default function renderMainPage() {
  const rootElement = clearRootElement();
  const appContainer = renderAppContainer();

  // appContainer.append(renderSearch());
  appContainer.append(renderNavBar());
  appContainer.append(renderContent());

  rootElement.append(appContainer);
}
