import Router from "./router";
import renderMainPage from "./pages/page-main";
import { getWeather } from "./storage";
import { apiKey } from "./api-key";

let router = null;
const defaultCity = "Minsk";

export default function configureRouter(appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^\/$/, async () => {
    console.log("Navigating");
    await renderMainPage();
    await getWeather(apiKey, defaultCity);
  });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
