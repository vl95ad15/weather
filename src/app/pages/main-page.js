import renderMainInfo from "../components/main-info";
import renderAdditionalInfo from "../components/additional-info";
import renderForecastContainer from "../components/forecast";
import { clearBlockById } from "../functions/helpers";

export default function mainPage(data) {
  const content = document.getElementById("content");
  clearBlockById("content");
  content.append(renderMainInfo(data));
  content.append(renderAdditionalInfo(data));
  content.append(renderForecastContainer(data));
}
