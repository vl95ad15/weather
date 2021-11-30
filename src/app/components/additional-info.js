import { createEl } from "../functions/helpers";

function renderAdditionalInfo(city) {
  const additionalInfoWrapper = createEl("div", "additional-info");
  const precipitation = createEl("div", "precipitation");
  precipitation.innerHTML = `
    <img src="http://cdn.onlinewebfonts.com/svg/img_499750.png" alt="">
    <span>${city.precipitation} %</span>`;
  const pressure = createEl("div", "pressure");
  pressure.innerHTML = `
    <img src="https://icons.veryicon.com/png/o/miscellaneous/streamline-light-icon/gauge-dashboard-1.png" alt="">
    <span>${city.pressure} mBar</span>
    `;
  const wind = createEl("div", "wind");
  wind.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/172/172922.png" alt="">
    <span>${city.wind} km/h</span>
  `;

  additionalInfoWrapper.append(precipitation);
  additionalInfoWrapper.append(pressure);
  additionalInfoWrapper.append(wind);

  return additionalInfoWrapper;
}

export default renderAdditionalInfo;
