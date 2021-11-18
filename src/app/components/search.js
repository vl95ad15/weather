import { createEl } from "../functions/helpers";
import { searchResult } from "../functions/storage";
import { apiKey } from "../const";

function renderSearch() {
  const searchWrapper = createEl("div", "search-wrapper");
  const searchForm = createEl("form");
  searchForm.id = "search-form";
  const searchField = createEl("input", "search-field");
  searchField.type = "search";
  searchField.placeholder = "Enter your city...";
  searchField.autofocus = true;
  const resultsField = createEl("div", "results-field");
  const resultsList = createEl("ul", "results-list");
  searchField.oninput = () =>
    searchResult(apiKey, searchField.value, resultsList);

  searchWrapper.append(searchForm);
  searchWrapper.append(resultsField);
  resultsField.append(resultsList);
  searchForm.append(searchField);

  return searchWrapper;
}

export default renderSearch;
