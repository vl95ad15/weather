import "./index.html";
import "./styles/style.scss";
import configureRouter from "./app/router/router-config";
import storage from "./app/model/Storage";
import { API_KEY } from "./app/const";

async function startApplication() {
  console.log("Application started");
  await storage.getCity(API_KEY);
  const router = configureRouter("/");
  router.navigate("/");
}

window.addEventListener("load", () => startApplication());
