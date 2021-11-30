import { createEl } from "../functions/helpers";
import configureRouter from "../router/router-config";

function renderNavBar() {
  const router = configureRouter("/");
  const navBarContainer = createEl("div", "nav-bar-container");
  const navBarList = createEl("ul", "nav-bar-list");
  const itemHome = createEl("li", "nav-item home");
  itemHome.textContent = "Home";
  itemHome.addEventListener("click", () => router.navigate("/"));
  const itemFav = createEl("li", "nav-item favorites");
  itemFav.textContent = "Favorites";
  itemFav.addEventListener("click", () => router.navigate("favorites"));

  navBarList.append(itemHome);
  navBarList.append(itemFav);
  navBarContainer.append(navBarList);

  return navBarContainer;
}

export default renderNavBar;
