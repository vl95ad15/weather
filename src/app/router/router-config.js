import Router from "./router";
import renderMainPage from "../page";
import { apiKey } from "../api-key";
import weatherStorage from "../model/WeatherStorage";

let router = null;
const defaultCity = "Minsk";

export default function configureRouter(doc, appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^home$/, async () => {
    console.log("Navigating to home page with default city");
    renderMainPage(doc, await weatherStorage.getCity(apiKey, defaultCity));
    // await getWeather(apiKey, defaultCity);
  });

  router.add(/^favorites$/, async () => {
    console.log("Navigating to favorites");
    await renderMainPage();
  });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
