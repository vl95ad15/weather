import { createEl } from "../functions/helpers";

function renderSunRiseSetContainer() {
  const sunRiseSetContainer = createEl("div", "sun-rise-set-container");
  const sunRiseInfoBlock = createEl("div", "sun-rise-block block");
  const sunRiseInfo = createEl("span", "sun-rise-info");
  // sunRiseInfo.textContent = city.days[0].astro.sunrise;
  const sunRiseImg = createEl("img", "sun-rise-img img");
  sunRiseImg.src = "https://pngimg.com/uploads/sun/sun_PNG13424.png";
  sunRiseInfoBlock.append(sunRiseInfo);
  sunRiseInfoBlock.append(sunRiseImg);
  const sunSetInfoBlock = createEl("div", "sun-set-block block");
  const sunSetInfo = createEl("span", "sun-set-info");
  // sunSetInfo.textContent = city.days[0].astro.sunset;
  const sunSetImg = createEl("img", "sun-set-img img");
  sunSetImg.src = "https://pngimg.com/uploads/moon/moon_PNG46.png";
  sunSetInfoBlock.append(sunSetImg);
  sunSetInfoBlock.append(sunSetInfo);

  sunRiseSetContainer.append(sunRiseInfoBlock);
  sunRiseSetContainer.append(sunSetInfoBlock);

  return sunRiseSetContainer;
}

export default renderSunRiseSetContainer;
