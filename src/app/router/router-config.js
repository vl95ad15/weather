import Router from "./router";
import mainPage from "../pages/main-page";
import favPage from "../pages/fav-page";
import storage from "../model/Storage";
import { API_KEY } from "../const";

let router = null;

export default function configureRouter(doc, appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^\/$/, async () => {
    console.log("Navigating to home page with current city");
    mainPage(await storage.getCity(API_KEY));
  });

  router.add(/^favorites$/, async () => {
    console.log("Navigating to favorites");
    favPage();
  });

  router.add(/^city\/(.*)$/, async (cityName) => {
    console.log(`Navigating to city ${cityName}`);
    mainPage();
  });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
