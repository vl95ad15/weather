import Router from "./router";
import renderMainPage from "./pages/page-main";
import getCurrentWeather from "./get-current-weather";

const root = document.querySelector("#root");
let router = null;

export default (appRootPath) => {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^\/$/, async () => {
    console.log("=> Navigating to page");
    renderMainPage(root);
    await getCurrentWeather();
  });
};
