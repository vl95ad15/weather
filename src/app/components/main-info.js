import { createEl } from "../functions/helpers";

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

export default renderMainInfo;
