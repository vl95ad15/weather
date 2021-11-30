import { createEl } from "../functions/helpers";
import storage from "../model/Storage";

function renderMainInfo() {
  const mainInfoWrapper = createEl("div", "main-info-wrapper");
  const weatherImgBlock = createEl("div", "weather-img-block");
  const weatherImg = createEl("img", "weather-img");
  weatherImg.src = storage.currentCity.img;
  const mainInfoBlock = createEl("div", "main-info-block");
  const cityName = createEl("p", "city-name");
  cityName.textContent = storage.currentCity.name;
  const degrees = createEl("p", "degrees");
  degrees.innerHTML = storage.currentCity.temp + "&deg;";
  const weatherType = createEl("p", "weather-type");
  weatherType.textContent = storage.currentCity.weatherType;
  const favIcon = createEl("span", "fav-icon");
  favIcon.innerHTML = !storage.currentCity.isFav ? "&star;" : "&starf;";

  favIcon.onclick = () => storage.addRemoveFav();

  mainInfoWrapper.append(mainInfoBlock);
  mainInfoWrapper.append(weatherImgBlock);
  mainInfoWrapper.append(favIcon);
  mainInfoBlock.append(cityName);
  mainInfoBlock.append(degrees);
  mainInfoBlock.append(weatherType);
  weatherImgBlock.append(weatherImg);

  return mainInfoWrapper;
}

export default renderMainInfo;
