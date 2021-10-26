import "../../styles/page-main-style.scss";
import { createEl } from "../helpers";

function renderSearch(root) {
  const searchWrapper = createEl("div", "search-wrapper");
  const searchForm = createEl("form");
  searchForm.id = "search-form";
  const searchField = createEl("input", "search-field");
  searchField.type = "search";
  searchField.placeholder = "Enter your city...";
  searchField.autofocus = true;

  searchWrapper.append(searchForm);
  searchForm.append(searchField);
  root.append(searchWrapper);
}

function renderMainInfo(root) {
  const mainInfoWrapper = createEl("div", "main-info-wrapper");
  const weatherImgBlock = createEl("div", "weather-img-block");
  const weatherImg = createEl("img", "weather-img");
  const mainInfoBlock = createEl("div", "main-info-block");
  const cityName = createEl("p", "city-name");
  const degrees = createEl("p", "degrees");
  const weatherType = createEl("p", "weather-type");

  root.append(mainInfoWrapper);
  mainInfoWrapper.append(mainInfoBlock);
  mainInfoWrapper.append(weatherImgBlock);
  mainInfoBlock.append(cityName);
  mainInfoBlock.append(degrees);
  mainInfoBlock.append(weatherType);
  weatherImgBlock.append(weatherImg);
}

function renderAdditionalInfo(root) {
  const additionalInfoWrapper = createEl("div", "additional-info");
  const precipitation = createEl("div", "precipitation");
  const pressure = createEl("div", "pressure");
  const wind = createEl("div", "wind");

  root.append(additionalInfoWrapper);
  additionalInfoWrapper.append(precipitation);
  additionalInfoWrapper.append(pressure);
  additionalInfoWrapper.append(wind);
}

export default function renderMainPage(root) {
  renderSearch(root);
  renderMainInfo(root);
  renderAdditionalInfo(root);
}
