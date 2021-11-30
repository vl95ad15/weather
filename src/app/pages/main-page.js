import renderMainInfo from "../components/main-info";
import renderAdditionalInfo from "../components/additional-info";
import renderForecastContainer from "../components/forecast";
import { clearBlockById } from "../functions/helpers";

export default function mainPage() {
  const content = document.getElementById("content");
  clearBlockById("content");
  content.append(renderMainInfo());
  content.append(renderAdditionalInfo());
  content.append(renderForecastContainer());
}
