import Router from "./router";
import renderMainPage from "./pages/page-main";

let router = null;

export default function configureRouter(appRootPath) {
  if (router !== null) {
    return router;
  }

  router = new Router([], "history", appRootPath);

  router.add(/^\/$/, () => {
    console.log("Navigating");
    renderMainPage();
  });

  router.config({ mode: "history", root: "/" });

  router.listen();

  return router;
}
