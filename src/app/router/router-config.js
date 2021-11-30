import Router from "./router";
import mainPage from "../pages/main-page";
import favPage from "../pages/fav-page";
import renderPage from "../main";

let router = null;

export default function configureRouter(appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^\/$/, async () => {
    console.log("Navigating to home page with current city");
    renderPage();
    mainPage();
  });

  router.add(/^favorites$/, async () => {
    console.log("Navigating to favorites");
    favPage();
  });

  // router.add(/^city\/(.*)$/, async (cityName) => {
  //   console.log(`Navigating to city ${cityName}`);
  //   mainPage();
  // });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
