// let offset = 0;

// function navigateToFavorites(doc) {
//   const router = configureRouter(doc, "/");
//   router.navigate("favorites");
// }
//
// function navigateToHome() {
//   const router = configureRouter("/");
//   router.navigate("/");
// }
//
// function prevBtnSliderHandler() {
//   offset = offset - 8;
//   if (offset < 0) {
//     offset = 96;
//   }
//   document.querySelector(".today-line").style.left = -offset + "%";
// }

// function nextBtnSliderHandler() {
//   offset = offset + 8;
//   console.log(offset);
//   if (offset > 96) {
//     offset = 0;
//   }
//   document.querySelector(".today-line").style.left = -offset + "%";
// }
//
// function actionHandler(event) {
//   const actionName = event.target.dataset["action"];
//   switch (actionName) {
//     case "favorites":
//       console.log("Processing go to favorites action");
//       break;
//
//     default:
//       console.log("Panic! Unknown Action.");
//   }
// }
//
// let boundNavigateToFavorites = null;
// let boundNextSliderBtn = null;
//
// export default function getEventHandlers(doc) {
//   boundNavigateToFavorites =
//     boundNavigateToFavorites !== null
//       ? boundNavigateToFavorites
//       : navigateToFavorites.bind(null, doc);
//   boundNextSliderBtn =
//     boundNextSliderBtn !== null
//       ? boundNextSliderBtn
//       : nextBtnSliderHandler.bind(null, doc);
//   return [
//     {
//       elementClass: ".favorites",
//       eventName: "click",
//       handler: boundNavigateToFavorites,
//     },
//     {
//       elementClass: ".btn-next",
//       eventName: "click",
//       handler: boundNextSliderBtn,
//     },
//   ];
//   // document.querySelector(".home").addEventListener("click", navigateToHome);
//   // document
//   //   .querySelector(".favorites")
//   //   .addEventListener("click", navigateToFavorites);
//   // document
//   //   .querySelector(".btn-prev")
//   //   .addEventListener("click", prevBtnSliderHandler);
//   // document
//   //   .querySelector(".btn-next")
//   //   .addEventListener("click", nextBtnSliderHandler);
// }
