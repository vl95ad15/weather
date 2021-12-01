import { clearBlockById } from "../functions/helpers";
import renderMainInfo from "../components/main-info/main-info";
import renderAdditionalInfo from "../components/additional-info/additional-info";
import renderTodayForecast from "../components/today-forecast/today-forecast";
import renderFutureForecast from "../components/future-forecast/future-forecast";
import renderSunRiseSetContainer from "../components/sun-rise-set/sun-rise-set";

export default function mainPage() {
  const content = document.getElementById("content");
  clearBlockById("content");
  content.append(renderMainInfo());
  content.append(renderAdditionalInfo());
  content.append(renderSunRiseSetContainer());
  content.append(renderTodayForecast());
  content.append(renderFutureForecast());
}
