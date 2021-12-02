import "../styles/style.scss";
import { clearRootElement, createEl } from "./functions/helpers";
import renderNavBar from "./components/nav-bar/nav-bar";

function renderAppContainer() {
  const appContainer = createEl("div");
  appContainer.id = "app";

  return appContainer;
}

function renderContentContainer() {
  const infoContainer = createEl("div", "info-container");
  infoContainer.id = "content";

  return infoContainer;
}

export default function renderTemplatePage() {
  const rootElement = clearRootElement();
  const appContainer = renderAppContainer();
  appContainer.append(renderNavBar());
  appContainer.append(renderContentContainer());
  rootElement.append(appContainer);
}
