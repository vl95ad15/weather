import "../styles/home-page-style.scss";
import { clearRootElement, createEl } from "./functions/helpers";
import setupEventListeners from "./events/events";
import getEventHandlers from "./events/eventHandlers";
import renderNavBar from "./components/nav-bar";
import renderContent from "./components/content";

function renderAppContainer() {
  const appContainer = createEl("div");
  appContainer.id = "app";

  return appContainer;
}

export default function renderPage(doc, data) {
  const rootElement = clearRootElement();
  const appContainer = renderAppContainer();

  // appContainer.append(renderSearch());
  appContainer.append(renderNavBar());
  appContainer.append(renderContent(data));

  rootElement.append(appContainer);
  setupEventListeners(doc, getEventHandlers(doc));
}
