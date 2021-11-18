import { createEl } from "../functions/helpers";
import renderMainInfo from "./main-info";
import renderAdditionalInfo from "./additional-info";
import renderForecastContainer from "./forecast";

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

export default renderContent;
