import { createEl } from "../functions/helpers";
import storage from "../model/Storage";

function renderMainInfo(city) {
  const mainInfoWrapper = createEl("div", "main-info-wrapper");
  const weatherImgBlock = createEl("div", "weather-img-block");
  const weatherImg = createEl("img", "weather-img");
  weatherImg.src = city.img;
  const mainInfoBlock = createEl("div", "main-info-block");
  const cityName = createEl("p", "city-name");
  cityName.textContent = city.name;
  const degrees = createEl("p", "degrees");
  degrees.innerHTML = city.temp + "&deg;";
  const weatherType = createEl("p", "weather-type");
  weatherType.textContent = city.weatherType;
  const favIcon = createEl("span", "fav-icon");
  if (!city.isFav) {
    favIcon.innerHTML = "&star;";
  } else {
    favIcon.innerHTML = "&starf;";
  }
  favIcon.onclick = () => storage.addToFav();

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
