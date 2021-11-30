import { createEl } from "../functions/helpers";
import configureRouter from "../router/router-config";

function renderNavBar(doc) {
  const router = configureRouter(doc, "/");
  const navBarContainer = createEl("div", "nav-bar-container");
  const navBarList = createEl("ul", "nav-bar-list");
  const itemHome = createEl("li", "nav-item home");
  itemHome.textContent = "Home";
  itemHome.addEventListener("click", () => {
    router.navigate("/");
    itemHome.id = "active";
    itemFav.id = null;
  });
  const itemFav = createEl("li", "nav-item favorites");
  itemFav.textContent = "Favorites";
  itemFav.addEventListener("click", () => {
    router.navigate("favorites");
    itemFav.id = "active";
    itemHome.id = null;
  });

  navBarList.append(itemHome);
  navBarList.append(itemFav);
  navBarContainer.append(navBarList);

  return navBarContainer;
}

export default renderNavBar;
