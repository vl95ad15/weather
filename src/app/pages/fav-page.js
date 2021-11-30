import renderSearch from "../components/search";
import renderFavoritesContainer from "../components/favorites";
import { clearBlockById } from "../functions/helpers";

export default function favPage() {
  const content = document.getElementById("content");
  clearBlockById("content");
  content.append(renderSearch());
  content.append(renderFavoritesContainer());
}
