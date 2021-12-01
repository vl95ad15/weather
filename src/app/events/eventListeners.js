import storage from "../model/Storage";
import { API_KEY } from "../const";

export const resultItemsOnClick = (list) => {
  list.childNodes.forEach((item) => {
    item.addEventListener("click", () =>
      storage.getWeatherSearchResult(item.innerText, API_KEY)
    );
  });
};

export const favItemsOnClick = (container) => {
  container.childNodes.forEach((item) => {
    item.addEventListener("click", () => storage.setCurrentCityById(item));
  });
};
