import Router from "./router";
import renderPage from "../main";
import { apiKey } from "../const";
import getCity from "../functions/getters/get-city";

let router = null;
const defaultCity = "Minsk";

export default function configureRouter(doc, appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^\/$/, async () => {
    console.log("Navigating to home page with default city");
    renderPage(doc, await getCity(apiKey, defaultCity));
  });

  router.add(/^favorites$/, async () => {
    console.log("Navigating to favorites");
    await renderPage();
  });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
