import { createEl } from "../functions/helpers";
import renderMainInfo from "./main-info";
import renderAdditionalInfo from "./additional-info";
import renderForecastContainer from "./forecast";

function renderContent(data) {
  const infoContainer = createEl("div", "info-container");

  if (data) {
    infoContainer.append(renderMainInfo(data));
    infoContainer.append(renderAdditionalInfo(data));
    infoContainer.append(renderForecastContainer(data));
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
