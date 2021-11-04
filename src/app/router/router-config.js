import Router from "./router";
import renderMainPage from "../page";
import { getWeather } from "../functions/storage";
import { apiKey } from "../api-key";

let router = null;
const defaultCity = "Minsk";

export default function configureRouter(appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^home$/, async () => {
    console.log("Navigating to home page with default city");
    await renderMainPage();
    await getWeather(apiKey, defaultCity);
  });

  router.add(/^favorites$/, async () => {
    console.log("Navigating to favorites");
    await renderMainPage();
  });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
