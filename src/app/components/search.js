import { createEl } from "../functions/helpers";
import { API_KEY } from "../const";
import storage from "../model/Storage";
import { resultItemsOnClick } from "../events/eventListeners";

const searchDataRenderer = () =>
  storage.searchData
    .map((item) => `<li id="${item.id}" class="result-item">${item.name}</li>`)
    .join("");

const searchFieldOnInputHandler = (searchField, resultsList) => {
  searchField.oninput = async () => {
    await storage.searchResult(API_KEY, searchField.value, resultsList);
    resultsList.innerHTML = searchDataRenderer();
    resultItemsOnClick(resultsList);
  };
};

export default function renderSearch() {
  const searchWrapper = createEl("div", "search-wrapper");
  const searchForm = createEl("form");
  searchForm.id = "search-form";
  const searchField = createEl("input", "search-field");
  searchField.type = "search";
  searchField.placeholder = "Enter your city...";
  searchField.autofocus = true;
  searchField.id = "search";
  const resultsField = createEl("div", "results-field");
  const resultsList = createEl("ul", "results-list");
  resultsList.id = "list";
  searchFieldOnInputHandler(searchField, resultsList);

  searchWrapper.append(searchForm);
  searchWrapper.append(resultsField);
  resultsField.append(resultsList);
  searchForm.append(searchField);

  return searchWrapper;
}
