import "./main-info.scss";
import { createEl } from "../../functions/helpers";
import storage from "../../model/Storage";

function renderMainInfo() {
  const mainInfoWrapper = createEl("div", "main-info-wrapper");
  const weatherImgBlock = createEl("div", "weather-img-block");
  const weatherImg = createEl("img", "weather-img");
  weatherImg.src = storage.currentCity.img;
  const mainInfoBlock = createEl("div", "main-info-block");
  const cityNameBlock = createEl("div", "city-name-block");
  const cityName = createEl("span", "city-name");
  cityName.textContent = storage.currentCity.name;
  const degrees = createEl("p", "degrees");
  degrees.innerHTML = storage.currentCity.temp + "&deg;";
  const weatherType = createEl("p", "weather-type");
  weatherType.textContent = storage.currentCity.weatherType;
  const favIcon = createEl("span", "fav-icon");
  favIcon.innerHTML = !storage.currentCity.isFav ? "&star;" : "&starf;";

  favIcon.addEventListener("click", () => storage.addRemoveFav());

  cityNameBlock.append(favIcon);
  cityNameBlock.append(cityName);

  mainInfoWrapper.append(mainInfoBlock);
  mainInfoWrapper.append(weatherImgBlock);
  mainInfoBlock.append(cityNameBlock);
  mainInfoBlock.append(degrees);
  mainInfoBlock.append(weatherType);
  weatherImgBlock.append(weatherImg);

  return mainInfoWrapper;
}

export default renderMainInfo;
