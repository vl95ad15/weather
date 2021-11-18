import { createEl } from "../functions/helpers";
import { navBarItems } from "../const";

function renderNavBar() {
  const navBarContainer = createEl("div", "nav-bar-container");
  const navBarList = createEl("ul", "nav-bar-list");
  navBarList.innerHTML = navBarItems
    .map((item) => `<li class="nav-item ${item.toLowerCase()}">${item}</li>`)
    .join("");
  navBarContainer.append(navBarList);

  return navBarContainer;
}

export default renderNavBar;
