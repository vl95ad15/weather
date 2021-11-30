import "./index.html";
import "./styles/style.scss";
import configureRouter from "./app/router/router-config";
import renderPage from "./app/main";

function startApplication(doc) {
  console.log("Application started");
  renderPage(doc);
  const router = configureRouter(doc, "/");
  router.navigate("/");
  console.log(router);
}

window.addEventListener("load", () => startApplication(document));
