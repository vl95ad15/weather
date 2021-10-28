import "./index.html";
import "./styles/style.scss";
import configureRouter from "./app/router-config";

function startApplication() {
  console.log("Application started");
  const router = configureRouter("/");

  router.navigate("/");
}

window.addEventListener("load", () => startApplication());
