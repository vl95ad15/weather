import { createEl } from "../functions/helpers";
import storage from "../model/Storage";

function renderFavoritesContainer() {
  const favoritesContainer = createEl("div", "fav-container");
  favoritesContainer.innerHTML =
    storage.favorites.length !== 0
      ? storage.favorites
          .map(
            (item) => `
    <div class="fav-item">
        <div class="fav-main-info-wrapper">
            <div class="fav-main-info">
                <span class="fav-deg">${item.temp}&deg;</span>
                <span>${item.name}</span>
                <span class="fav-country">${item.country}</span>
            </div>
            <div class="fav-img-block">
                <img class="fav-img" src="${item.img}" alt="">
            </div>
        </div>
        <div class="fav-add-info-wrapper">
            <div class="fav-prec">
                <img src="http://cdn.onlinewebfonts.com/svg/img_499750.png" alt="">
                <span>${item.precipitation}%</span>
            </div>
            <div class="fav-wind">
                <img src="https://cdn-icons-png.flaticon.com/512/172/172922.png" alt="">
                <span>${item.wind}km/h</span>
            </div>
        </div> 
    </div>
  `
          )
          .join("")
      : `<div class="empty-placeholder">
            <span >You have no favorites</span>
         </div>`;

  return favoritesContainer;
}

export default renderFavoritesContainer;
