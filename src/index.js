import "./index.html";
import "./styles/style.scss";
import configureRouter from "./app/router/router-config";

function startApplication(doc) {
  console.log("Application started");
  const router = configureRouter(doc, "/");

  router.navigate("home");
  console.log(router);
}

window.addEventListener("load", () => startApplication(document));
